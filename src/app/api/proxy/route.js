export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) return new Response('URL이 없습니다.', { status: 400 });

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    let body = await response.text();
    const baseUrl = new URL(targetUrl).origin;

    // base 태그 주입
    body = body.replace(
      /<head[^>]*>/i,
      (match) => `${match}<base href="${baseUrl}/" target="_blank">`,
    );

    const bypassScript = `
      <script>
        // 브라우저의 History 조작 기능을 가짜(더미) 함수로 덮어씌웁니다.
        // 이렇게 하면 npm 스크립트가 replaceState를 호출해도 아무 일도 일어나지 않습니다.
        window.history.replaceState = function() { console.log('replaceState 차단됨'); };
        window.history.pushState = function() { console.log('pushState 차단됨'); };

        // 보안 에러를 방지하기 위해 location 조작 시도도 잡아냅니다.
        Object.defineProperty(window, 'location', {
          configurable: false,
          enumerable: true,
          get: function() { return window.self.location; }
        });
      </script>
    `;

    body = body.replace(/<head[^>]*>/i, (match) => `${match}${bypassScript}`);

    // frame-busting 제거
    body = body
      .replace(/top\.location/g, 'self.location')
      .replace(/parent\.location/g, 'self.location')
      .replace(/window\.top/g, 'window.self')
      .replace(/window\.parent/g, 'window.self');

    // 링크 클릭 시 iframe 탈출 방지
    body = body.replace(
      /<a\b/gi,
      '<a target="_blank" rel="noopener noreferrer"',
    );

    return new Response(body, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Security-Policy': 'frame-ancestors *',
      },
    });
  } catch (error) {
    return new Response('사이트 로드 실패', { status: 500 });
  }
}

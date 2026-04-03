export const categoryMap = {
  'Next.js': 'NEXTJS',
  API: 'API',
  Career: 'CAREER',
  'Modern JS': 'MODERNJS',
  Web: 'WEB',
};

export const documentTypeMap = {
  공식문서: 'DOCUMENTATION',
  블로그: 'BLOG',
};

export function formatChallengePayload(data) {
  return {
    title: data.title,
    docUrl: data.docUrl,
    description: data.description,
    category: categoryMap[data.category] ?? data.category,
    documentType: documentTypeMap[data.documentType] ?? data.documentType,
    dueDate: new Date(data.dueDate).toISOString(),
    maxParticipants: Number(data.maxParticipants),
  };
}
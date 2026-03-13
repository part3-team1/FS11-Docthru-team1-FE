# DocThru

## Sprint 중급 프로젝트 1팀

## Frontend

### app/ 하위 폴더명: lower-kebab case

## 폴더 구조

## app/(admin): admin 페이지들만 모아놨습니다.

### - (admin header 적용, components/Layout/adminHeader)

### - (/challenge-management, /challenges-admin, challenges-admin/[id])

## app/(not-header): header가 필요 없는 페이지들만 모아놨습니다.

### - (/edit, /login, /signup)

## app/(with-header)/(public): 기본 랜딩 페이지 입니다.

### - (기본 header 적용, components/Layout/publicHeader)

### - (domain/Home/Container)

## app/(with-header)/(user): 로그인 시 보이는 페이지들만 모아놨습니다.

### - (/my-challenge, /challenges, /challenges/[id])

## components 폴더

### - Button: 버튼 컴포넌트

### - Layout: 레이아웃들, 현재는 헤더만..

## domain 폴더

### - 페이지 별 기능 단위로 UI 와 로직을 구성하는 폴더입니다.

### - Container: 페이지 조립, 데이터 처리

### - Components: UI 컴포넌트

.
├── public
│ └── Images
│ ├── Icon
│ └── Logo
│ └── logo.svg
├── README.md
└── src
├── app
│ ├── (admin)
│ │ ├── challenge-management
│ │ │ └── page.js
│ │ ├── challenges-admin
│ │ │ ├── [id]
│ │ │ │ └── page.js
│ │ │ └── page.js
│ │ └── layout.js
│ ├── (not-header)
│ │ ├── edit
│ │ │ └── page.js
│ │ ├── login
│ │ │ └── page.js
│ │ └── signup
│ │ └── page.js
│ ├── (with-header)
│ │ ├── (public)
│ │ │ ├── layout.js
│ │ │ └── page.js
│ │ └── (user)
│ │ ├── challenges
│ │ │ ├── [id]
│ │ │ │ └── page.js
│ │ │ └── page.js
│ │ ├── layout.js
│ │ └── my-challenge
│ │ └── page.js
│ └── layout.js
├── components
│ ├── Button
│ │ ├── button.css.js
│ │ └── button.js
│ └── Layout
│ ├── adminHeader
│ │ ├── adminHeader.css.js
│ │ └── adminHeader.js
│ ├── publicHeader
│ │ ├── Header.css.js
│ │ └── Header.js
│ └── userHeader
│ ├── userHeader.css.js
│ └── userHeader.js
├── domain
│ ├── Auth
│ │ ├── Login
│ │ │ ├── Components
│ │ │ │ └── loginComponent.js
│ │ │ └── Container
│ │ │ └── loginContainer.js
│ │ └── Signup
│ │ ├── Components
│ │ │ └── signupComponent.js
│ │ └── Container
│ │ └── signupContainer.js
│ ├── ChallengeDetail
│ │ ├── Components
│ │ │ ├── adminChallengeDetail.js
│ │ │ └── challengeDetail.js
│ │ └── Container
│ │ └── challengeDetailContainer.js
│ ├── ChallengeManagement
│ │ ├── Components
│ │ │ └── challengeManagement.js
│ │ └── Container
│ │ └── challengeManagementContainer.js
│ ├── Challenges
│ │ ├── Components
│ │ │ ├── adminChallenges.js
│ │ │ └── challenges.js
│ │ └── Container
│ │ └── challengesContainer.js
│ ├── Edit
│ │ ├── Components
│ │ │ └── edit.js
│ │ └── Container
│ │ └── editContainer.js
│ ├── Home
│ │ ├── Components
│ │ │ ├── CTASection
│ │ │ │ ├── CTASection.css.js
│ │ │ │ └── CTASection.js
│ │ │ ├── FeatureSection
│ │ │ │ ├── featureSection.css.js
│ │ │ │ └── featureSection.js
│ │ │ └── HeroSection
│ │ │ ├── herosection.css.js
│ │ │ └── heroSection.js
│ │ └── Container
│ │ └── homeContainer.js
│ └── MyChallenge
│ ├── Components
│ │ └── myChallenge.js
│ └── Container
│ └── myChallengeContainer.js
├── lib
│ ├── api
│ └── queryKeys.js
└── styles
├── globals.css.js
└── reset.css.js

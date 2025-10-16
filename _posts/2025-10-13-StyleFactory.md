---
layout: post
title: "StyleFactory - React 컴포넌트 스타일링 도구"
date: 2024-10-13 09:00:00 +0900
categories: portfolio
---

# StyleFactory

## [StyleFactory 바로가기](https://qwezxc3810.github.io/Style-Factory/)

### StyleFactory는 React 컴포넌트의 스타일을 시각적으로 설정하고, Tailwind CSS, CSS Module, Styled-Components 코드를 자동으로 생성해주는 무료 온라인 도구입니다.

![Image](https://github.com/user-attachments/assets/14ea6b94-a389-43d9-ac96-fa6ea9a74eaa)

---

## 제작 의도 및 배경

### 프론트엔드 개발을 공부하고 준비하는 과정에서 사용자 인터페이스(UI)의 시각적 요소가 프로젝트의 성공에 매우 중요함을 깨달았습니다.

### 이러한 배경에서 StyleFactory를 개발하게 된 목적은 크게 두 가지입니다.

1. **효율적인 학습과 개발 생산성 향상**

   - **시각적 스타일링 감각 습득:** 다양한 컴포넌트의 스타일을 시각적으로 직접 설정해보면서, UI 디자인 감각과 스타일링 원리를 직관적으로 익힐 수 있습니다.

   - **주요 CSS 스타일링 코드 학습:** Tailwind CSS, CSS Module, Styled-Components 등 업계에서 많이 사용되는 스타일링 코드를 실습과 동시에 자동으로 생성하여 학습 효율을 높일 수 있습니다.

   - **Tailwind CSS 코드 능숙도 향상:** 특히 사용자들이 자주 헷갈리는 Tailwind CSS 클래스를 시각적 설정만으로 정확한 코드로 즉시 변환하여 보여줌으로써 학습을 돕고, 생성된 코드를 바로 복사하여 프로젝트에 붙여 넣을 수 있도록 편의성을 극대화했습니다.

2. **실시간 디자인 검증 및 결정**

   - 컴포넌트의 스타일 변경 사항을 실시간으로 확인하고 **"이 정도면 충분하다", "이런 스타일이 적합하다"**와 같은 디자인 결정을 즉각적으로 내릴 수 있도록 돕기 위해 시각적 구현 환경을 제공합니다.

---

## 주요 목표

- **생산성 향상:** 시각적 편집으로 빠른 스타일 프로토타이핑

- **다양한 CSS 스택 지원:** 프로젝트에 맞는 코드 형식 선택

- **학습 도구:** CSS 속성과 다양한 CSS 방법론 학습

- **무료 & 오픈소스:** 누구나 자유롭게 사용 가능

---

## 주요 특징

1. **직관적인 시각적 편집기**

   - 슬라이더와 입력 필드로 CSS 속성 조정

   - 컬러 피커로 색상 선택

   - 실시간 프리뷰로 변경사항 즉시 확인

2. **멀티 CSS 스택 지원**

   - **Tailwind CSS:** 유틸리티 클래스 기반

   - **CSS Module:** 모듈화된 CSS

   - **Styled-Components:** CSS-in-JS

3. **개발자 친화적**

   - 원클릭 코드 복사

   - 깔끔한 코드 포맷팅

   - 다크모드 지원

4. **반응형 디자인**

   - 모바일, 태블릿, 데스크톱 모두 지원

   - 어디서나 접근 가능한 웹 기반 도구

---

## 기술 스택

- **Frontend:** React 19.1.1, Tailwind CSS 4.1.13
- **Build Tool:** Vite 7.1.12 (Rolldown)
- **Deployment:** GitHub Pages

## 프로젝트 구조

````
Style-Factory/
├── LICENSE                     # 라이센스
├── README.md                   # 프로젝트 개요
├── wiki/                       # Wiki 문서
└── ReactApp/                   # React 애플리케이션
    ├── package.json            # 의존성 관리
    ├── vite.config.js          # Vite 빌드 설정
    ├── eslint.config.js        # ESLint 설정
    ├── index.html              # HTML 진입점
    ├── public/                 # 정적 파일
    │   ├── faivcon.ico         # 파비콘
    │   └── faivcon.png         # OG 이미지
    └── src/                    # 소스 코드
        ├── main.jsx            # JavaScript 진입점
        ├── index.css           # 전역 스타일
        ├── components/         # React 컴포넌트
        │   ├── Layout.jsx      # 메인 레이아웃
        │   ├── InputForm/      # 입력 폼 컴포넌트
        │   │   └── InputForm.jsx
        │   ├── Preview/        # 프리뷰 컴포넌트
        │   │   └── Preview.jsx
        │   └── UI/             # UI 컴포넌트
        │       ├── Button.jsx
        │       └── DarkModeToggle.jsx
        └── utils/              # 유틸리티 함수
            └── codeGenerators/ # 코드 생성기
                ├── tailwindGen.js
                ├── cssModulGen.js
                └── styleComponentsGen.js
                ```
````

### 주요 디렉토리 설명

`/ReactApp`
React 애플리케이션의 루트 디렉토리입니다.

`/ReactApp/src`
모든 소스 코드가 위치하는 디렉토리입니다.

`/ReactApp/src/components`
React 컴포넌트들을 기능별로 분류하여 저장합니다.

`/ReactApp/src/utils`
재사용 가능한 유틸리티 함수들을 저장합니다.

`/ReactApp/public`
정적 파일(이미지, 아이콘 등)을 저장합니다.

---

## 데이터 흐름

### Props Drilling 패턴

```
Layout (State 소유)
  │
  ├─→ InputForm (State 수정)
  │     ├─ properties + setProperties
  │     ├─ cssStack + setCssStack
  │     └─ selectedComponent + setSelectedComponent
  │
  └─→ Preview (State 읽기)
        ├─ properties (읽기 전용)
        ├─ cssStack (읽기 전용)
        └─ selectedComponent (읽기 전용)
```

### 데이터 흐름 단계

<a href="https://github.com/user-attachments/assets/60c0a905-abbb-4c63-ab69-3ebdc6ff1a8f?raw=true">
  <img src="https://github.com/user-attachments/assets/60c0a905-abbb-4c63-ab69-3ebdc6ff1a8f?raw=true" alt="데이터 흐름 다이어그램" style="max-width: 100%; height: auto; border: 1px solid #ddd;">
</a>

### 최적화

`useMemo Hook`
불필요한 코드 재생성을 방지합니다:

```
const generatedCode = useMemo(() => {
  // 코드 생성 로직
}, [selectedComponent, properties, activeTab]);
```

**의존성 배열:**
selectedComponent, properties, activeTab이 변경될 때만 재계산

---

## 상세 문서

프로젝트에 대한 더 자세한 정보는 [Wiki](https://github.com/qwezxc3810/Style-Factory/wiki)에서 확인할 수 있습니다:

- [Getting Started](https://github.com/qwezxc3810/Style-Factory/wiki/Getting-Started) - 설치 및 시작 가이드
- [Features](https://github.com/qwezxc3810/Style-Factory/wiki/Features) - 기능 상세 설명
- [Architecture](https://github.com/qwezxc3810/Style-Factory/wiki/Architecture) - 프로젝트 아키텍처
- [Component API](https://github.com/qwezxc3810/Style-Factory/wiki/Component-API) - 컴포넌트 API 문서
- [Code Generators](https://github.com/qwezxc3810/Style-Factory/wiki/Code-Generators) - 코드 생성기 상세
- [Development Guide](https://github.com/qwezxc3810/Style-Factory/wiki/Development-Guide) - 개발 가이드

import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    styledcomponents,
    git,
    starbucks,
    aboutme,
    passwordgenerator,
    nextlogo,
    blogThumbnail,
    sing4u
} from "../assets";

export const navLinks = [
    {
        id: "#experience",
        title: "업무경험"
    },

    {
        id: "#project",
        title: "프로젝트"
    },
    {
        id: "#etc",
        title: "기타"
    },
    {
        id: "#contact",
        title: "연락처"
    }
];

const services = [
    {
        title: "Frontend Developer",
        icon: javascript
    },
    {
        title: "React",
        icon: reactjs
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html
    },
    {
        name: "CSS 3",
        icon: css
    },
    {
        name: "JavaScript",
        icon: javascript
    },
    {
        name: "TypeScript",
        icon: typescript
    },
    {
        name: "React JS",
        icon: reactjs
    },

    {
        name: "Tailwind CSS",
        icon: tailwind
    },
    {
        name: "git",
        icon: git
    },
    {
        name: "styled-components",
        icon: styledcomponents
    }
];

const experiences = [
    {
        title: "애자일그로스",
        company_name: "프론트엔드",
        icon: starbucks,
        iconBg: "#ffffff",
        date: "2023.08 ~ 2024.02",
        points: [
            "기존 인라인 스타일이 적용되어있던 부분을 가독성 향상을 위해 컴포넌트 단위의 네이밍 적용",
            "사용자가 폴더에 직접 접근하지 않고도 비디오의 width, height를 확인 가능하게 하기 위해 HTML VideoElement API 적용",
            "Recoil을 사용하면서 발생한 key 이슈를 jotai를 이용해 해결"
        ]
    },
    {
        title: "트래포트",
        company_name: "프론트엔드",
        icon: starbucks,
        iconBg: "#ffffff",
        date: "2024.03 ~ 2024.09",
        points: [
            "출장자 검색 API 중복 호출 버그 수정",
            "정규식 및 Angular Form을 이용하여 예약자 정보 폼 유효성 검증 추가",
            "숙박 캘린더 호출 시 중복으로 호출되던 데이터 리팩토링 작업"
        ]
    }
];

const projects = [
    {
        name: "어바웃미",
        description:
            "본인이 본인을 평가할 때는 주관적 요소가 들어갈 수 있기 때문에 제대로 된 자기 성찰을 하기 어려울 것으로 생각합니다. 그러므로 타인의 시선으로 새로운 저를 발견할 수 있지 않을까라는 생각으로 시작했습니다.",
        tags: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "styled-components" },
            { name: "Recoil" }
        ],
        image: aboutme,
        source_code_link: "https://github.com/taeo-sprint16/frontend"
    },
    {
        name: "비밀번호 생성기",
        description:
            "부모님이 특정 사이트에 회원가입을 하실 때 비밀번호 생성에 어려움을 겪으시는 모습을 보고, 안전하고 사용하기 쉬운 비밀번호 생성기를 개발하기로 했습니다.",
        troubleShooting:
            "초기에는 Math.random() 함수를 사용하여 비밀번호를 생성했으나, 이 방식이 암호학적으로 안전하지 않다는 것을 알게 되었습니다. 보안성을 높이기 위한 방법을 리서치한 결과, 브라우저에 내장된 Web Crypto API가 암호학적으로 더 안전한 난수를 생성할 수 있음을 확인했습니다. 또한 생성된 비밀번호의 보안 수준을 검증하기 위해 Have I Been Pwned API를 활용하여 해킹 여부를 판단하는 기능을 추가하기로 했습니다.",
        result: "Math.random() 대신 Web Crypto API를 사용하여 비밀번호 생성 알고리즘을 개선함으로써 보안성을 크게 강화했습니다. 또한 ARIA 속성을 추가로 적용하여 웹 접근성을 개선했으며, 이로 인해 Lighthouse의 접근성 점수가 83점에서 95점으로 향상되었습니다.",
        tags: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "Panda CSS" },
            { name: "crypto" }
        ],
        image: passwordgenerator,
        source_code_link: "https://github.com/HA-SEUNG-JEONG/password-generator"
    },
    {
        name: "싱포유",
        description:
            "여러 아티스트들이 팬들로부터 신청 곡을 간편하게 받고 쉽게 관리할 수 있도록 돕는 서비스입니다.",
        tags: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Context API" }
        ],
        image: sing4u
    }
];

const opensource = [
    {
        name: "Nextjs.kr 한글 번역 기여",
        link: "https://morethan-haseung-log.vercel.app/nextjs-kr",
        description: "첫 오픈소스 기여 경험을 블로그로 작성하였습니다.",
        image: nextlogo
    },
    {
        name: "블로그 회고 스터디",
        link: "https://morethan-haseung-log.vercel.app/nextjs-kr",
        description:
            "한 달에 한 번 스터디원들과 경험을 공유하면서 다른 개발자들과 네트워킹합니다.",
        image: blogThumbnail
    }
];

export { services, technologies, experiences, projects, opensource };

import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    starbucks,
    carrent,
    aboutme,
    nextlogo,
    password,
    blogThumbnail
} from "../assets";

export const navLinks = [
    {
        id: "#experience",
        title: "Experience"
    },

    {
        id: "#project",
        title: "Project"
    },
    {
        id: "#etc",
        title: "Etc"
    },
    {
        id: "#contact",
        title: "Contact"
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
    }
];

const experiences = [
    {
        title: "애자일그로스",
        company_name: "프론트엔드",
        icon: starbucks,
        iconBg: "#ffffff",
        date: "2023.08 ~ 2024.01",
        points: [
            "기존 인라인 스타일이 적용되어있던 부분을 가독성 향상을 위해 컴포넌트 단위의 네이밍 적용",
            "API 처리 과정에서 Toast 컴포넌트를 활용함으로써 사용자 경험 개선",
            "video 객체를 다루면서 겪은 경험에 대해 기록",
            "Recoil을 사용하면서 겪었던 이슈를 jotai로 바꾸면서 얻은 경험에 대해 기록"
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
        name: "Swap()",
        description:
            "트위터, 인스타그램 등의 sns를 하다보면 자신이 원하는 랜덤굿즈를 다른 사람이 소장하고 있거나 해당 굿즈를 다른 굿즈와 교환하고자 하는 경우를 볼 수 있습니다. 프리미엄을 주고 구매하는 등 다른 방법을 통해 얻을 수도 있겠지만, 물물교환의 방식을 통해 굿즈 자체의 가치만을 존중하는 서로 win-win이 될 수 있는 서비스를 한번 만들고 싶어서 swap( )이라는 프로젝트를 기획하게 되었습니다.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient"
            },
            {
                name: "TypeScript",
                color: "green-text-gradient"
            },
            {
                name: "styled-components",
                color: "pink-text-gradient"
            },
            {
                name: "Recoil",
                color: "green-text-gradient"
            }
        ],
        image: carrent,
        source_code_link: "https://github.com/project-swap/swap"
    },
    {
        name: "About me",
        description:
            "테오의 스프린트를 통해 5일 동안 기획 및 디자인, 개발과 배포까지 진행한 프로젝트입니다.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient"
            },
            {
                name: "TypeScript",
                color: "green-text-gradient"
            },
            {
                name: "styled-components",
                color: "pink-text-gradient"
            },
            {
                name: "Recoil",
                color: "green-text-gradient"
            }
        ],
        image: aboutme,
        source_code_link: "https://github.com/taeo-sprint16/frontend"
    },
    {
        name: "랜덤 비밀번호 생성기",
        description:
            "개인 프로젝트로, range slider와 정규식 패턴을 이용하여 랜덤으로 비밀번호를 생성하는 도구를 만들었습니다.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient"
            },
            {
                name: "TypeScript",
                color: "green-text-gradient"
            },
            {
                name: "Tailwindcss",
                color: "pink-text-gradient"
            }
        ],
        image: password,
        source_code_link: "https://github.com/taeo-sprint16/frontend"
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
        description: "한 달에 한 번 스터디원들과 경험을 공유합니다.",
        image: blogThumbnail
    }
];

export { services, technologies, experiences, projects, opensource };

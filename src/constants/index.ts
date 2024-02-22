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
    nextlogo
} from "../assets";

export const navLinks = [
    {
        id: "#work",
        title: "Work"
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
        iconBg: "#383E56",
        date: "August 2023 - January 2024",
        points: [
            "기존 인라인 스타일이 적용되어있던 부분을 가독성 향상을 위해 컴포넌트 단위의 네이밍 적용",
            "API 처리 과정에서 Toast 컴포넌트를 활용함으로써 사용자 경험 개선",
            "video 객체를 다루면서 겪은 경험에 대해 기록",
            "Recoil을 사용하면서 겪었던 이슈를 jotai로 바꾸면서 얻은 경험에 대해 기록"
        ]
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg"
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
    }
];

const opensource = [
    {
        name: "Nextjs.kr 한글 번역 기여",
        link: "https://morethan-haseung-log.vercel.app/nextjs-kr",
        description: "첫 오픈소스 기여 경험을 블로그로 작성하였습니다.",
        image: nextlogo
    }
];

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    opensource
};

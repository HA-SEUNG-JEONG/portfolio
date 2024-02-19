import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs
} from "../assets";

export const navLinks = [
    {
        id: "#about",
        title: "About"
    },
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
        name: "Redux Toolkit",
        icon: redux
    },
    {
        name: "Tailwind CSS",
        icon: tailwind
    },
    {
        name: "Node JS",
        icon: nodejs
    },
    {
        name: "MongoDB",
        icon: mongodb
    },
    {
        name: "Three JS",
        icon: threejs
    },
    {
        name: "git",
        icon: git
    },
    {
        name: "figma",
        icon: figma
    },
    {
        name: "docker",
        icon: docker
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
        description: `음악, 드라마 그리고 영화 등의 K-Culture가 전 세계적으로 인기를 끌며, 흔히 말하는 ‘덕질문화’ 속
						'수집'은 팬들의 하나의 취미로 자리잡았다. 사회적으로 취미 중심 커뮤니티가 활성화되고 이에 대한
						중고거래의 빈도가늘어나는 현시대의 트렌드와 팬들의 수집문화를 결합하여, 서로가 좋아하고
						관심 있어하는 분야를 공유하고 서로 교환하는 하나의 플랫폼인 swap( )이 탄생하게 되었다.`,
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
    }
];

export { services, technologies, experiences, testimonials, projects };

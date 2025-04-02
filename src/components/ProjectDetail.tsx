import { motion } from "framer-motion";
import { styles } from "../style";
import { projects } from "../constants";
import { useParams, useNavigate } from "react-router-dom";
import { fadeIn, textVariant } from "../util/motion";
import { SectionWrapper } from "../hoc";

interface ProjectContent {
    troubleShooting?: {
        problems: string[];
        results: string[];
    };
    collaboration?: {
        experience: string[];
        lessons?: string[];
    };
}

const projectContents: Record<string, ProjectContent> = {
    "비밀번호 생성기": {
        troubleShooting: {
            problems: [
                "초기에는 Math.random() 함수를 사용하여 비밀번호를 생성했으나, 이 방식이 암호학적으로 안전하지 않다는 것을 알게 되었습니다. 보안성을 높이기 위한 방법을 리서치한 결과, 브라우저에 내장된 Web Crypto API가 암호학적으로 더 안전한 난수를 생성할 수 있음을 확인했습니다. ",
                "생성된 비밀번호의 보안 수준을 검증하기 위해 Have I Been Pwned API를 활용하여 해킹 여부를 판단하는 기능을 추가하기로 했습니다."
            ],
            results: [
                "Web Crypto API를 사용하여 비밀번호 생성 알고리즘을 개선함으로써 보안성을 크게 강화했습니다. ",
                "ARIA 속성을 추가로 적용하여 웹 접근성을 개선했으며, 이로 인해 Lighthouse의 접근성 점수가 83점에서 95점으로 향상되었습니다."
            ]
        }
    },
    어바웃미: {
        collaboration: {
            experience: [
                "아이디어 토의 및 기획 및 개발, 배포까지 진행",
                "사용자 행동을 기반으로 업무 분배"
            ],
            lessons: [
                "짧은 기간 동안 기획자 및 디자이너와 협업하는 과정에서 어떻게 소통해야 하는 지 배울 수 있었습니다.",
                "사용자 기반 데이터와 스키마 기반 데이터를 이용해 효율적으로 업무 분배 및 업무 진행도를 확인할 수 있었습니다."
            ]
        }
    },
    싱포유: {
        troubleShooting: {
            problems: [
                "Context API를 활용한 전역 상태 관리 구현",
                "실시간 신청곡 목록 업데이트 및 상태 관리",
                "아티스트와 팬의 효율적인 데이터 연동 처리"
            ],
            results: [
                "Context API를 통한 효율적인 상태 관리로 컴포넌트 간 데이터 공유 개선",
                "실시간으로 업데이트되는 신청곡 목록으로 사용자 경험 향상",
                "아티스트와 팬 간의 원활한 소통 창구 구축"
            ]
        }
    },
    "칸반 투두리스트": {
        troubleShooting: {
            problems: [
                "dnd-kit 라이브러리를 이용하여 구현했지만, 기능에 비해 번들 사이즈가 상대적으로 크다는 것을 알게 되었습니다.",
                "모바일 환경에서 드래그앤드롭 시 불필요한 드래그가 되는 이슈를 겪었습니다."
            ],
            results: [
                "HTML5의 Drag and Drop API의 dataTransfer 객체를 활용하여 드래그앤드롭 기능을 직접 구현하여 번들 사이즈를 16% 가량 줄였습니다.",
                "드래그가 되는 현상을 방지하기 위해 롱프레스 이벤트를 이용하여 자연스러운 드래그앤드롭이 되도록 했습니다."
            ]
        }
    }
};

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.name === id);
    const content = id ? projectContents[id] : null;

    if (!project) {
        return <div>프로젝트를 찾을 수 없습니다.</div>;
    }

    return (
        <>
            <motion.div variants={textVariant("")}>
                <h2 className={styles.sectionHeadText}>{project.name}</h2>
            </motion.div>

            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-20 flex flex-col gap-7"
            >
                <div className="bg-tertiary p-5 rounded-2xl">
                    <div className="relative w-full h-[400px]">
                        <img
                            src={project.image}
                            alt="project_image"
                            className="w-full h-full object-contain rounded-3xl"
                        />
                    </div>

                    <div className="mt-8">
                        <h3 className="text-white font-bold text-[24px]">
                            프로젝트 소개
                        </h3>
                        <p className="mt-2 text-secondary text-[16px]">
                            {project.description}
                        </p>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-white font-bold text-[24px]">
                            사용 기술
                        </h3>
                        <div className="mt-4 text-secondary text-[16px]">
                            {project.tags.map((tag, index) => (
                                <span key={`${project.name}-${tag.name}`}>
                                    {tag.name}
                                    {index < project.tags.length - 1 && ", "}
                                </span>
                            ))}
                        </div>
                    </div>

                    {content?.troubleShooting && (
                        <>
                            <div className="mt-8">
                                <h3 className="text-white font-bold text-[24px]">
                                    문제 해결
                                </h3>
                                <ul className="mt-4 list-disc pl-5">
                                    {content.troubleShooting.problems.map(
                                        (problem, index) => (
                                            <li
                                                key={index}
                                                className="text-secondary text-[16px] mb-2"
                                            >
                                                {problem}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-white font-bold text-[24px]">
                                    적용 결과
                                </h3>
                                <ul className="mt-4 list-disc pl-5">
                                    {content.troubleShooting.results.map(
                                        (result, index) => (
                                            <li
                                                key={index}
                                                className="text-secondary text-[16px] mb-2"
                                            >
                                                {result}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </>
                    )}

                    {content?.collaboration && (
                        <>
                            <div className="mt-8">
                                <h3 className="text-white font-bold text-[24px]">
                                    협업 경험
                                </h3>
                                <ul className="mt-4 list-disc pl-5">
                                    {content.collaboration.experience.map(
                                        (exp, index) => (
                                            <li
                                                key={index}
                                                className="text-secondary text-[16px] mb-2"
                                            >
                                                {exp}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-white font-bold text-[24px]">
                                    협업에서 얻은 점
                                </h3>
                                <ul className="mt-4 list-disc pl-5">
                                    {content.collaboration.lessons?.map(
                                        (lesson, index) => (
                                            <li
                                                key={index}
                                                className="text-secondary text-[16px] mb-2"
                                            >
                                                {lesson}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </>
                    )}

                    {project.source_code_link && (
                        <div className="mt-8">
                            <h3 className="text-white font-bold text-[24px]">
                                GitHub
                            </h3>
                            <a
                                href={project.source_code_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-[#915eff] hover:underline"
                            >
                                GitHub 저장소 바로가기
                            </a>
                        </div>
                    )}

                    <button
                        onClick={() => navigate(-1)}
                        className="mt-8 bg-[#915eff] px-8 py-3 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#7a4be6] transition-colors"
                    >
                        뒤로 가기
                    </button>
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(ProjectDetail, "project-detail");

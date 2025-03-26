import { motion } from "framer-motion";
import { styles } from "../style";
import { projects } from "../constants";
import { useParams, useNavigate } from "react-router-dom";
import { fadeIn, textVariant } from "../util/motion";
import { SectionWrapper } from "../hoc";

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.name === id);

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
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <p
                                    key={`${project.name}-${tag.name}`}
                                    className={`text-[14px] ${tag.color}`}
                                >
                                    #{tag.name}
                                </p>
                            ))}
                        </div>
                    </div>

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

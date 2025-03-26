import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../util/motion";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
    index: number;
    name: string;
    description: string;
    tags: { name: string; color?: string }[];
    image: string;
    source_code_link?: string;
}

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link
}: ProjectCardProps) => {
    const navigate = useNavigate();

    const handleDetailPage = () => {
        navigate(`/project/${name}`);
    };

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="bg-tertiary p-5 rounded-2xl w-full flex flex-row gap-5 items-center"
        >
            <div className="relative w-[200px] h-[200px]">
                <img
                    src={image}
                    alt="project_image"
                    className="w-full h-full object-contain rounded-3xl"
                />

                <div
                    onClick={handleDetailPage}
                    className="absolute inset-0 flex justify-end card-img_hover"
                >
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            if (source_code_link) {
                                window.open(source_code_link, "_blank");
                            }
                        }}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img
                            src={github}
                            alt="source code"
                            className="w-1/2 h-1/2 object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
                <button
                    onClick={handleDetailPage}
                    className="mt-4 bg-[#915eff] px-6 py-2 rounded-xl outline-none text-white font-bold shadow-md shadow-primary hover:bg-[#7a4be6] transition-colors"
                >
                    자세히 보기
                </button>
            </div>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant("")}>
                <h2 className={styles.sectionHeadText}>프로젝트</h2>
            </motion.div>
            <div className="mt-20 flex flex-col gap-7 ">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "project");

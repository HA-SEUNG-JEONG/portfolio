import { motion } from "framer-motion";
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
                ></div>
            </div>

            <div className="flex-1">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
                <div className="mt-4">
                    <div className="text-[14px] text-secondary">
                        {tags.map((tag, index) => (
                            <span key={`${name}-${tag.name}`}>
                                {tag.name}
                                {index < tags.length - 1 && ", "}
                            </span>
                        ))}
                    </div>
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
            <div className="mt-20 flex flex-col gap-7">
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

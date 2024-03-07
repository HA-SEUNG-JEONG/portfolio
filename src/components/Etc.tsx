import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../util/motion";
import { styles } from "../style";
import { opensource } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { web } from "../assets";

interface OpenSourceProps {
    description: string;
    link: string;
    image: string;
    name: string;
    index: number;
}

const OpenSourceCard = ({
    description,
    name,
    link,
    index,
    image
}: OpenSourceProps) => {
    return (
        <>
            <motion.div
                variants={fadeIn("bottom", "spring", index * 0.05, 0.75)}
            >
                <Tilt
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
                >
                    <div className="relative w-full h-[230px]">
                        <img
                            src={image}
                            alt="project_image"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                            <div
                                onClick={() => window.open(link, "_blank")}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <img
                                    src={web}
                                    alt="source code"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-white font-bold text-[24px]">
                            {name}
                        </h3>
                        <p className="mt-2 text-secondary text-[14px]">
                            {description}
                        </p>
                    </div>
                </Tilt>
            </motion.div>
        </>
    );
};

const Etc = () => {
    return (
        <>
            <motion.div variants={textVariant("")}>
                <h2 className={styles.sectionHeadText}>외부활동</h2>
            </motion.div>
            <div className="mt-20 flex flex-wrap gap-7">
                {opensource.map((source, index) => (
                    <OpenSourceCard
                        key={`opensource-${index}`}
                        index={index}
                        {...source}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Etc, "etc");

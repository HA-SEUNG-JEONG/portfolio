import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [isActive, setIsActive] = useState("");
    const [isToggle, setIsToggle] = useState(false);

    const handleGithub = () => {
        window.open("https://github.com/HA-SEUNG-JEONG", "_blank");
    };
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-1/2"
                    onClick={() => {
                        setIsActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-9 h-9 object-contain rounded-xl mr-3"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer">
                        정하승
                    </p>
                    <button
                        onClick={handleGithub}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-gray-600"
                    >
                        View on Github
                    </button>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                isActive === link.title
                                    ? "text-white"
                                    : "text-secondary"
                            } hover:text-gray-400 text-[18px] font-medium cursor-pointer`}
                            onClick={() => setIsActive(link.title)}
                        >
                            <a href={`${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={isToggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setIsToggle((toggle) => !toggle)}
                    />
                    <div
                        className={`${
                            !isToggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 mion-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                        isActive === link.title
                                            ? "text-white"
                                            : "text-secondary"
                                    } font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setIsToggle((toggle) => !toggle);
                                        setIsActive(link.title);
                                    }}
                                >
                                    <a href={`${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

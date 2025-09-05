import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeSection = ({ title, description, buttonText }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/UpcomingPage");
    };

    return (
        <div className="rounded-menu bg-gray flex flex-col items-center text-center px-6 sm:px-12 md:px-20 lg:px-32">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 pt-20 lg:pt-48 lg:self-center lg:text-left">
                {title}
            </h1>

            <p className="text-black max-w-3xl pt-6 text-sm sm:text-base md:text-lg">
                {description}
            </p>

            <button
                onClick={handleClick}
                className="bg-lime text-black h-10 rounded-lg hover:bg-lime-hover transition px-10 sm:px-16 md:px-20 lg:px-[78px] mt-12 whitespace-nowrap mb-8 lg:mb-0"
            >
                {buttonText}
            </button>
        </div>
    );
};

export default WelcomeSection;

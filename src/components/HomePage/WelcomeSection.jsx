import React from 'react';

const WelcomeSection = ({ title, description, buttonText }) => {
    return (
        <div className="rounded-menu bg-white flex flex-col">
            <h1 className="text-3xl font-bold mb-4 text-start pt-[9.5rem] pl-[17.5rem]">
                {title}
            </h1>

            <p className="text-black text-center px-44 pt-6">{description}</p>

            <button className="bg-lime text-black h-10 rounded-lg hover:bg-lime-hover transition flex items-center justify-center px-[78px] mx-auto mt-12 whitespace-nowrap">
                {buttonText}
            </button>
        </div>
    );
};

export default WelcomeSection;

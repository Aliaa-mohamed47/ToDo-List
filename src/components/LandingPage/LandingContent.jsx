import React from 'react';

const LandingContent = ({ title, description, buttonText, linkText, linkHref }) => {
    return (
        <div className="flex flex-col justify-center items-center h-full p-8 md:p-16 text-center bg-white rounded-all shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {title}
            </h1>

            <p className="pl-10 pr-10 text-black text-start mb-6">
                {description}
            </p>

            <button className="bg-lime text-black px-6 py-2 rounded-xl hover:bg-lime-hover transition mb-6 w-full max-w-[calc(100%-2.5rem)]">
                {buttonText}
            </button>

            <p className="text-black text-sm">
                {linkText}{" "}

                <a href={linkHref} className="text-black hover:underline">
                    Sign In
                </a>
            </p>
        </div>
    );
};

export default LandingContent;

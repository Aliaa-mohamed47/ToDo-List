import React from 'react';

const LandingContent = ({ title, description, buttonText, linkText, linkHref }) => {
    return (
        <div className="w-[36.25rem] h-[45.5rem] rounded-all bg-white flex flex-col px-32">
            <h1 className="text-3xl font-bold mb-4 text-center" style={{ paddingTop: "var(--spacing-202)" }}>
                {title}
            </h1>

            <p className="text-black mb-6 text-start">{description}</p>

            <button className="bg-lime-500 text-black w-96 h-10 rounded-xl hover:bg-lime-600 transition self-start">
                {buttonText}
            </button>

            <p className="mt-6 text-black text-sm text-center">
                {linkText}{" "}
                <a href={linkHref} className="text-black hover:underline">
                    Sign In
                </a>
            </p>
        </div>
    );
};

export default LandingContent;
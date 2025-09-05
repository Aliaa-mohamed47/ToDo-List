import React from 'react';
import { Link } from 'react-router-dom';

const LandingContent = ({ title, description, buttonText, linkText, linkHref }) => {
    return (
        <div className="flex flex-col justify-center items-center h-full p-8 md:p-16 text-center bg-white rounded-all shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {title}
            </h1>

            <p className="pl-10 pr-10 text-black text-start mb-6">
                {description}
            </p>

            <Link to={linkHref} className="w-full max-w-[calc(100%-2.5rem)] mb-6">
                <button className="bg-lime text-black px-6 py-2 rounded-xl hover:bg-lime-hover transition w-full">
                    {buttonText}
                </button>
            </Link>

            <Link to={linkHref} className="text-black text-sm hover:underline">
                {linkText} Sign In
            </Link>
        </div>
    );
};

export default LandingContent;

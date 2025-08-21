import React from "react";
import heroImage from "../../assets/hero1.png";

const LandingImage = () => {
    return (
        <div className="w-full flex justify-center">
            <img
                src={heroImage}
                alt="To Do List"
                className="max-w-full h-auto rounded-all object-contain"
            />
        </div>
    );
};

export default LandingImage;
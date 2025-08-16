import React from "react";
import heroImage from "../assets/hero1.png";

const LandingImage = () => {
    return (
        <div className="w-[36.25rem] h-[45.5rem]">
        <img
            src={heroImage}
            alt="To Do List"
            className="h-full w-full object-cover rounded-all"
        />
        </div>
    );
};

export default LandingImage;
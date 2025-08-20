"use client";

import React from "react";
import { colors } from "../../config/theme";

interface Props {
    title: string;
}

const HeroSection: React.FC<Props> = ({ title }) => {
    return (
        <div className="mt-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
            </h2>
            <div className={`w-20 h-1 ${colors.primary} mx-auto`}></div>
        </div>

        // <section className="mt-6 flex justify-center">
        //   <div className="max-w-3xl w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl shadow-md py-2 px-6 text-center">
        //     <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
        //       {title}
        //     </h1>
        //   </div>
        // </section>
    );
};

export default HeroSection;

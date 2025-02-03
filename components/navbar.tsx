"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative w-full bg-[#030712] text-white shadow-md">
            {/* Navbar */}
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo & Lab Name */}
                    <div className="flex items-center space-x-3">
                        <Image src="/logo.png" alt="Lab Logo" width={40} height={40} />
                        <span className="text-xl font-bold">Lab Name</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex space-x-6">
                        {["Home", "Research", "Team", "Publications", "News & Vacancies", "Contact"].map(
                            (item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase().replace(/ & /g, "-")}`}
                                    className="text-gray-300 hover:text-blue-400 transition"
                                >
                                    {item}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden bg-[#030712] border-t border-gray-700">
                    {["Home", "Research", "Team", "Publications", "News & Vacancies", "Contact"].map(
                        (item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(/ & /g, "-")}`}
                                className="block px-6 py-3 text-gray-300 hover:bg-gray-800 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        )
                    )}
                </div>
            )}

            {/* Lab Name & Tagline Section */}
            <div className=" max-w-5xl  mx-auto h-64 flex flex-col items-center justify-center text-center px-4 bg-[#030712] border-t border-gray-700">
                <h1 className="text-3xl font-bold mb-4">Welcome to the Badr Lab for Translational Microbiome Research!
                </h1>
                <p className="text-lg text-gray-400">At the Badr Lab, we study the human microbiome’s role in health and disease,
                    focusing on how imbalances influence infection severity and patient outcomes. Our
                    research aims to identify microbial signatures and biomarkers for infection, cancer
                    and beyond, providing insights into disease mechanisms and guiding personalized
                    strategies for infection prevention and treatment.
                </p>
            </div>
        </header>
    );
};

export default Navbar;

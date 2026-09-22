import { useEffect, useState } from "react";

import { useCourse } from "../../../context/useCourse";

const baseNavigationItems = [
    { label: "Overview", href: "#overview" },
    { label: "Announcements", href: "#announcements" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Syllabus", href: "#syllabus" }
];

const blowupSyllabusItem = { label: "Blow-up Syllabus", href: "#blowup-syllabus" };

const remainingNavigationItems = [
    { label: "Journal", href: "#journal" },
    { label: "Laboratory", href: "#laboratory" },
    { label: "Assignments", href: "#assignments" },
    { label: "Resources", href: "#resources" }
];

export default function CourseNavigation() {

    const { blowupSyllabus } = useCourse();

    const navigationItems = [
        ...baseNavigationItems,
        ...(blowupSyllabus.length > 0 ? [blowupSyllabusItem] : []),
        ...remainingNavigationItems
    ];

    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        setActiveSection(entry.target.id);

                    }

                });

            },

            {
                rootMargin: "-25% 0px -60% 0px",
                threshold: 0.1
            }

        );

        navigationItems.forEach((item) => {

            const id = item.href.replace("#", "");

            const element = document.getElementById(id);

            if (element) {

                observer.observe(element);

            }

        });

        return () => observer.disconnect();

    }, [navigationItems]);

    return (

        <section
            className="
                sticky
                top-16
                z-40
                border-y
                border-slate-200
                bg-white/90
                backdrop-blur-md
            "
        >

            <div className="max-w-7xl mx-auto px-6">

                <nav className="flex overflow-x-auto">

                    {navigationItems.map((item) => {

                        const isActive =
                            activeSection === item.href.replace("#", "");

                        return (

                            <a
                                key={item.href}
                                href={item.href}
                                className={`
                                    whitespace-nowrap
                                    px-5
                                    py-4
                                    text-sm
                                    font-semibold
                                    border-b-2
                                    transition-all
                                    duration-200
                                    ${
                                        isActive
                                            ? "border-blue-600 text-blue-600"
                                            : "border-transparent text-slate-600 hover:text-blue-600"
                                    }
                                `}
                            >
                                {item.label}
                            </a>

                        );

                    })}

                </nav>

            </div>

        </section>

    );

}
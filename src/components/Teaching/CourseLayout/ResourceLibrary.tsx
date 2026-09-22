import {
    Download,
    FileText,
    Presentation,
    BookOpen,
    Code2,
    FileQuestion,
    ClipboardList,
    Calendar
} from "lucide-react";

import FileCard from "../../ui/FileCard";
import SectionHeader from "./SectionHeader";

import { useCourse } from "../../../context/useCourse";

const iconMap = {
    "Lecture Notes": FileText,
    "Presentations": Presentation,
    "Lab Manuals": ClipboardList,
    "SQL Scripts": Code2,
    "Python Scripts": Code2,
    "Assignments": FileQuestion,
    "Reference Books": BookOpen,
    "Previous Question Papers": Download,
    "Academic Calendar": Calendar
};

export default function ResourceLibrary() {

    const { resources } = useCourse();

    return (

        <section
            id="resources"
            className="
                scroll-mt-36
                border-t
                border-slate-200
                py-20
            "
        >

            <div className="mx-auto max-w-7xl px-6">

                <SectionHeader
                    eyebrow="Downloads Center"
                    title="Course Resources"
                    description="All downloadable resources for this course are organized in one place."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {resources.map((resource) => {

                        const Icon = iconMap[resource.category];

                        return (

                            <FileCard
                                key={resource.id}
                                icon={
                                    <Icon
                                        size={30}
                                        className="text-blue-600"
                                    />
                                }
                                title={resource.title}
                                subtitle={resource.category}
                                available={resource.uploaded}
                                buttonText="Download"
                                onClick={
                                    resource.uploaded
                                        ? () => window.open(resource.file, "_blank", "noopener,noreferrer")
                                        : undefined
                                }
                            />

                        );

                    })}

                </div>

            </div>

        </section>

    );

}
import {
    FlaskConical,
    FileText,
    Code2,
    CheckCircle2,
    Circle
} from "lucide-react";

import FileCard from "../../ui/FileCard";
import SectionHeader from "./SectionHeader";

import { useCourse } from "../../../context/useCourse";

export default function LaboratoryStudio() {

    const { labs } = useCourse();

    return (

        <section
            id="laboratory"
            className="
                scroll-mt-36
                py-20
                border-t
                border-slate-200
            "
        >

            <div className="max-w-7xl mx-auto px-6">

                <SectionHeader
                    eyebrow="Practical Learning"
                    title="Laboratory Studio"
                    description="Every laboratory experiment, SQL script, manual and solution will be published here."
                />

                <div className="mt-12 grid gap-8">

                    {labs.map((lab) => (

                        <div
                            key={lab.id}
                            className="
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                p-8
                                shadow-sm
                            "
                        >

                            <div className="flex items-start justify-between">

                                <div>

                                    <span
                                        className="
                                            rounded-full
                                            bg-purple-100
                                            px-4
                                            py-1
                                            text-sm
                                            font-semibold
                                            text-purple-700
                                        "
                                    >
                                        Experiment {lab.experimentNo}
                                    </span>

                                    <h3 className="mt-5 text-3xl font-bold">

                                        {lab.title}

                                    </h3>

                                </div>

                                <span
                                    className="
                                        rounded-full
                                        bg-slate-100
                                        px-4
                                        py-2
                                        text-sm
                                    "
                                >

                                    {lab.difficulty}

                                </span>

                            </div>

                            <div className="mt-8">

                                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">

                                    Objectives

                                </h4>

                                <ul className="mt-4 space-y-2">

                                    {lab.objectives.map((objective) => (

                                        <li
                                            key={objective}
                                            className="text-slate-700"
                                        >

                                            • {objective}

                                        </li>

                                    ))}

                                </ul>

                            </div>

                            <div className="mt-10 grid gap-4 md:grid-cols-3">

                                <FileCard
                                    icon={
                                        <FileText
                                            size={22}
                                            className="text-blue-600"
                                        />
                                    }
                                    title="Lab Manual"
                                    subtitle="PDF Manual"
                                    available={lab.resources.manual.uploaded}
                                    buttonText="Open"
                                />

                                <FileCard
                                    icon={
                                        <Code2
                                            size={22}
                                            className="text-purple-600"
                                        />
                                    }
                                    title="Code File"
                                    subtitle="Program File"
                                    available={lab.resources.code.uploaded}
                                    buttonText="Open"
                                />

                                <FileCard
                                    icon={
                                        <FlaskConical
                                            size={22}
                                            className="text-green-600"
                                        />
                                    }
                                    title="Solution"
                                    subtitle="Reference Solution"
                                    available={lab.resources.solution.uploaded}
                                    buttonText="Open"
                                />

                            </div>

                            <div className="mt-8">

                                {lab.status === "Completed" ? (

                                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">

                                        <CheckCircle2 size={16} />

                                        Completed

                                    </span>

                                ) : (

                                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 font-semibold text-slate-700">

                                        <Circle size={16} />

                                        Upcoming

                                    </span>

                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}
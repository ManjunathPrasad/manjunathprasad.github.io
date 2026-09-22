import { BookOpen, Clock3, FlaskConical, GraduationCap, Target } from "lucide-react";

import Accordion, { type AccordionItem } from "../../ui/Accordion";
import InfoCard from "../../ui/InfoCard";

import SectionHeader from "./SectionHeader";

import { useCourse } from "../../../context/useCourse";

export default function CourseSyllabus() {

    const { syllabus } = useCourse();

    const items: AccordionItem[] = syllabus.map((unit) => ({

        id: unit.id.toString(),

        title: `Unit ${unit.id} - ${unit.title}`,

        subtitle: unit.description,

        content: (

            <div className="space-y-8">

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    <InfoCard
                        icon={<Clock3 className="text-blue-600" />}
                        title="Teaching Hours"
                        value={`${unit.hours} Hours`}
                    />

                    {unit.labHours > 0 && (

                        <InfoCard
                            icon={<FlaskConical className="text-orange-600" />}
                            title="Lab Hours"
                            value={`${unit.labHours} Hours`}
                        />

                    )}

                    <InfoCard
                        icon={<BookOpen className="text-green-600" />}
                        title="Lectures"
                        value={`${unit.lectures} Classes`}
                    />

                    <InfoCard
                        icon={<GraduationCap className="text-purple-600" />}
                        title="Learning Outcomes"
                        value={unit.outcomes.length}
                    />

                </div>

                <div>

                    <h4 className="flex items-center gap-2 text-lg font-bold">

                        <BookOpen size={18} />

                        Topics Covered

                    </h4>

                    <ul className="mt-4 grid gap-3 md:grid-cols-2">

                        {unit.topics.map((topic) => (

                            <li
                                key={topic}
                                className="
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-3
                                "
                            >
                                {topic}
                            </li>

                        ))}

                    </ul>

                </div>

                <div>

                    <h4 className="flex items-center gap-2 text-lg font-bold">

                        <Target size={18} />

                        Learning Outcomes

                    </h4>

                    <ul className="mt-4 space-y-3">

                        {unit.outcomes.map((outcome) => (

                            <li
                                key={outcome}
                                className="flex items-start gap-3"
                            >

                                <span className="font-bold text-green-600">

                                    ✓

                                </span>

                                <span>

                                    {outcome}

                                </span>

                            </li>

                        ))}

                    </ul>

                </div>

            </div>

        )

    }));

    return (

        <section
            id="syllabus"
            className="
                scroll-mt-36
                border-t
                border-slate-200
                py-20
            "
        >

            <div className="mx-auto max-w-7xl px-6">

                <SectionHeader
                    eyebrow="Course Structure"
                    title="Course Syllabus"
                    description="Expand each unit to explore topics, teaching hours and learning outcomes."
                />

                <div className="mt-12">

                    <Accordion
                        items={items}
                        defaultOpen="1"
                    />

                </div>

            </div>

        </section>

    );

}
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { useCourse } from "../../../context/useCourse";

import SectionHeader from "./SectionHeader";
import LectureCard from "./LectureCard";

export default function CourseJournal() {

    const { journal } = useCourse();

    const [expandedLecture, setExpandedLecture] = useState(1);

    const [searchText, setSearchText] = useState("");

    const filteredJournal = useMemo(() => {

    const query = searchText
        .trim()
        .toLowerCase();

    if (!query) {

        return journal;

    }

    return journal.filter((lecture) => {

        const titleMatch =
            lecture.title.toLowerCase().includes(query);

        const unitMatch =
            lecture.unit.toLowerCase().includes(query);

        const dateMatch =
            lecture.date.toLowerCase().includes(query);

        const statusMatch =
            lecture.status.toLowerCase().includes(query);

        const topicMatch =
            lecture.topics.some((topic) =>
                topic.toLowerCase().includes(query)
            );

        return (
            titleMatch ||
            unitMatch ||
            dateMatch ||
            statusMatch ||
            topicMatch
        );

    });

}, [searchText, journal]);

    return (

        <section
            id="journal"
            className="
                scroll-mt-36
                py-20
                border-t
                border-slate-200
            "
        >

            <div className="max-w-7xl mx-auto px-6">

                <SectionHeader
                    eyebrow="Daily Teaching Log"
                    title="Class Journal"
                    description="A chronological record of every theory class conducted during the semester including topics covered, notes, presentations and learning resources."
                />

                <div className="mt-10">

                    <div className="relative">

                        <Search
                            size={20}
                            className="
                                absolute
                                left-5
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />

                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search by lecture title, topic, unit, date or status..."
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                py-4
                                pl-14
                                pr-5
                                text-lg
                                shadow-sm
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:ring-4
                                focus:ring-blue-100
                            "
                        />

                    </div>

                </div>

                <div className="mt-4 flex items-center justify-between">

                    <p className="text-sm text-slate-500">

                        Showing

                        <span className="mx-1 font-semibold text-slate-900">

                            {filteredJournal.length}

                        </span>

                        of

                        <span className="mx-1 font-semibold text-slate-900">

                            {journal.length}

                        </span>

                        lectures

                    </p>

                </div>

                <div className="relative mt-10">

                    <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200" />

                    <div className="space-y-12">

                        {filteredJournal.map((lecture) => (

                            <div
                                key={lecture.id}
                                className="relative flex gap-8"
                            >

                                <div
                                    className="
                                        relative
                                        z-10
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-blue-600
                                        font-bold
                                        text-white
                                        shadow-lg
                                    "
                                >

                                    {lecture.classNo}

                                </div>

                                <div className="flex-1">

                                    <LectureCard
                                        lecture={lecture}
                                        expanded={expandedLecture === lecture.id}
                                        searchText={searchText}
                                        onToggle={() =>
                                            setExpandedLecture(
                                                expandedLecture === lecture.id
                                                    ? 0
                                                    : lecture.id
                                            )
                                        }
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}
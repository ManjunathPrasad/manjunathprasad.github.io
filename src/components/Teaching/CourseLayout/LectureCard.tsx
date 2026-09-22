import {
    Calendar,
    FileText,
    Monitor,
    Code2,
    BookOpen,
    ChevronDown,
    ChevronRight
} from "lucide-react";

import Card from "../../ui/Card";
import FileCard from "../../ui/FileCard";
import StatusBadge from "../../ui/StatusBadge";
import HighlightText from "../../ui/HighlightText";

import type { JournalLecture } from "../../../types/teaching";

type Props = {

    lecture: JournalLecture;

    expanded: boolean;

    onToggle: () => void;

    searchText: string;

};

export default function LectureCard({

    lecture,

    expanded,

    onToggle,

    searchText

}: Props) {

    return (

        <Card className="p-8">

            <button
                onClick={onToggle}
                className="
                    w-full
                    cursor-pointer
                    text-left
                "
            >

                <div className="flex items-start justify-between">

                    <div>

                        <div className="flex items-center gap-3">

                            <span
                                className="
                                    rounded-full
                                    bg-blue-100
                                    px-3
                                    py-1
                                    text-sm
                                    font-semibold
                                    text-blue-700
                                "
                            >
                                <HighlightText
                                    text={lecture.unit}
                                    search={searchText}
                                />
                            </span>

                            <span
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-slate-500
                                "
                            >

                                <Calendar size={15} />

                                <HighlightText
                                    text={lecture.date}
                                    search={searchText}
                                />

                            </span>

                        </div>

                        <h2 className="mt-6 text-3xl font-black">

                            <HighlightText
                                text={lecture.title}
                                search={searchText}
                            />

                        </h2>

                    </div>

                    <div className="flex items-center gap-4">

                        <StatusBadge status={lecture.status} />

                        {expanded ? (

                            <ChevronDown
                                className="text-slate-500"
                            />

                        ) : (

                            <ChevronRight
                                className="text-slate-500"
                            />

                        )}

                    </div>

                </div>

            </button>

            {expanded && (

                <>

                    <div className="mt-8">

                        <p
                            className="
                                text-xs
                                uppercase
                                tracking-widest
                                text-slate-500
                            "
                        >
                            Topics Covered
                        </p>

                        <ul className="mt-4 space-y-3">

                            {lecture.topics.map((topic) => (

                                <li key={topic}>

                                    •{" "}

                                    <HighlightText
                                        text={topic}
                                        search={searchText}
                                    />

                                </li>

                            ))}

                        </ul>

                    </div>

                    <div className="mt-10">

                        <p
                            className="
                                text-xs
                                uppercase
                                tracking-widest
                                text-slate-500
                            "
                        >
                            Learning Resources
                        </p>

                        <div
                            className="
                                mt-4
                                grid
                                gap-4
                                md:grid-cols-2
                                xl:grid-cols-4
                            "
                        >

                            <FileCard
                                icon={
                                    <FileText
                                        className="text-blue-600"
                                        size={22}
                                    />
                                }
                                title="Lecture Notes"
                                subtitle="PDF Notes"
                                available={lecture.resources.notes.uploaded}
                                buttonText="Open"
                            />

                            <FileCard
                                icon={
                                    <Monitor
                                        className="text-green-600"
                                        size={22}
                                    />
                                }
                                title="Presentation"
                                subtitle="PowerPoint Slides"
                                available={lecture.resources.slides.uploaded}
                                buttonText="Open"
                            />

                            <FileCard
                                icon={
                                    <Code2
                                        className="text-purple-600"
                                        size={22}
                                    />
                                }
                                title="SQL Scripts"
                                subtitle="SQL Files"
                                available={lecture.resources.code.uploaded}
                                buttonText="Open"
                            />

                            <FileCard
                                icon={
                                    <BookOpen
                                        className="text-orange-600"
                                        size={22}
                                    />
                                }
                                title="Additional Reading"
                                subtitle="Reference Material"
                                available={lecture.resources.reading.uploaded}
                                buttonText="Open"
                            />

                        </div>

                    </div>

                </>

            )}

        </Card>

    );

}
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import SectionHeader from "./SectionHeader";
import AnnouncementCard from "./AnnouncementCard";

import { useCourse } from "../../../context/useCourse";

const filters = [

    "All",

    "General",

    "Assignment",

    "Laboratory",

    "Exam",

    "Holiday"

] as const;

type Filter = typeof filters[number];

export default function Announcements() {

    const { announcements: courseAnnouncements } = useCourse();

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState<Filter>("All");

    const announcements = useMemo(() => {

        return [...courseAnnouncements]

            .sort((a, b) => Number(b.pinned) - Number(a.pinned))

            .filter((announcement) => {

                const matchesFilter =

                    filter === "All"
                        ? true
                        : announcement.type === filter;

                const keyword = search.toLowerCase();

                const matchesSearch =

                    announcement.title
                        .toLowerCase()
                        .includes(keyword)

                    ||

                    announcement.description
                        .toLowerCase()
                        .includes(keyword);

                return matchesFilter && matchesSearch;

            });

    }, [search, filter, courseAnnouncements]);

    return (

        <section
            id="announcements"
            className="
                scroll-mt-36
                border-t
                border-slate-200
                py-20
            "
        >

            <div className="mx-auto max-w-7xl px-6">

                <SectionHeader
                    eyebrow="Course Updates"
                    title="Announcements"
                    description="Stay informed about assignments, laboratory sessions, examinations and important course updates."
                />

                {/* Search */}

                <div className="relative mt-12">

                    <Search
                        className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-slate-400
                        "
                        size={18}
                    />

                    <input
                        type="text"
                        placeholder="Search announcements..."
                        value={search}
                        onChange={(event) =>
                            setSearch(event.target.value)
                        }
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            py-4
                            pl-12
                            pr-4
                            outline-none
                            focus:border-blue-500
                        "
                    />

                </div>

                {/* Filters */}

                <div className="mt-8 flex flex-wrap gap-3">

                    {filters.map((item) => (

                        <button
                            key={item}
                            type="button"
                            onClick={() => setFilter(item)}
                            className={`
                                rounded-full
                                px-5
                                py-2
                                text-sm
                                font-semibold
                                transition

                                ${
                                    filter === item
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-100 hover:bg-slate-200"
                                }
                            `}
                        >

                            {item}

                        </button>

                    ))}

                </div>

                {/* Announcement Cards */}

                <div className="mt-12 space-y-6">

                    {announcements.length > 0 ? (

                        announcements.map((announcement) => (

                            <AnnouncementCard
                                key={announcement.id}
                                announcement={announcement}
                            />

                        ))

                    ) : (

                        <div
                            className="
                                rounded-3xl
                                border
                                border-dashed
                                border-slate-300
                                bg-slate-50
                                p-16
                                text-center
                            "
                        >

                            <h3 className="text-2xl font-bold">

                                No announcements found

                            </h3>

                            <p className="mt-3 text-slate-500">

                                Try changing the search keyword or selected filter.

                            </p>

                        </div>

                    )}

                </div>

            </div>

        </section>

    );

}
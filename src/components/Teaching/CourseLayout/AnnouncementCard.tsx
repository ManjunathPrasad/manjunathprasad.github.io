import {
    Bell,
    Calendar,
    Paperclip,
    Pin
} from "lucide-react";

import Card from "../../ui/Card";

import type { Announcement } from "../../../types/teaching";

type Props = {

    announcement: Announcement;

};

const badgeColors = {

    General: "bg-blue-100 text-blue-700",

    Assignment: "bg-orange-100 text-orange-700",

    Laboratory: "bg-purple-100 text-purple-700",

    Exam: "bg-red-100 text-red-700",

    Holiday: "bg-green-100 text-green-700"

};

export default function AnnouncementCard({

    announcement

}: Props) {

    return (

        <Card className="p-8">

            <div className="flex flex-wrap items-center justify-between gap-4">

                <div className="flex flex-wrap items-center gap-3">

                    <span
                        className={`
                            rounded-full
                            px-3
                            py-1
                            text-sm
                            font-semibold
                            ${badgeColors[announcement.type]}
                        `}
                    >
                        {announcement.type}
                    </span>

                    {announcement.pinned && (

                        <span
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-yellow-100
                                px-3
                                py-1
                                text-sm
                                font-semibold
                                text-yellow-700
                            "
                        >
                            <Pin size={14} />

                            Pinned
                        </span>

                    )}

                    {announcement.isNew && (

                        <span
                            className="
                                rounded-full
                                bg-blue-600
                                px-3
                                py-1
                                text-xs
                                font-bold
                                uppercase
                                tracking-wide
                                text-white
                            "
                        >
                            NEW
                        </span>

                    )}

                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-slate-500
                    "
                >
                    <Calendar size={16} />

                    {announcement.date}

                </div>

            </div>

            <div className="mt-6 flex items-start gap-4">

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-50
                    "
                >
                    <Bell
                        className="text-blue-600"
                        size={22}
                    />
                </div>

                <div className="flex-1">

                    <h3 className="text-2xl font-bold">

                        {announcement.title}

                    </h3>

                    <p
                        className="
                            mt-3
                            leading-7
                            text-slate-600
                        "
                    >
                        {announcement.description}

                    </p>

                    {announcement.attachment && (

                        <div
                            className="
                                mt-6
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                px-4
                                py-2
                                text-sm
                            "
                        >
                            <Paperclip size={16} />

                            {announcement.attachment}

                        </div>

                    )}

                </div>

            </div>

        </Card>

    );

}
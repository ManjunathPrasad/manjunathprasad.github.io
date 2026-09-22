import {
    BookOpen,
    FlaskConical,
    FileText,
    Bell
} from "lucide-react";

import { useCourse } from "../../../context/useCourse";

import {
    getCompletedTheoryHours,
    getCompletedLabHours,
    getTheoryProgressPercentage,
    getLabProgressPercentage,
    getUploadedResourcesCount,
    getReleasedAssignmentsCount,
    getAnnouncementsCount
} from "../../../utils/teaching/courseProgress";

import SectionHeader from "./SectionHeader";
import Card from "../../ui/Card";
import ProgressBar from "../../ui/ProgressBar";
import StatCard from "../../ui/StatCard";

export default function CourseDashboard() {

    const {
        course,
        journal,
        labs,
        resources,
        assignments,
        announcements
    } = useCourse();

    const theoryHours = getCompletedTheoryHours(journal);
    const labHours = getCompletedLabHours(labs);

    const theoryPercentage = getTheoryProgressPercentage(journal, course);
    const labPercentage = getLabProgressPercentage(labs, course);

    return (

            <section
                id="dashboard"
                className="
                    scroll-mt-36
                    py-20
                    border-t
                    border-slate-200
                "
            >

            <div className="max-w-7xl mx-auto px-6">

                <SectionHeader
                    eyebrow="Course Progress"
                    title="Semester Dashboard"
                    description="Live statistics generated automatically from your teaching records."
                />

                <div className="grid lg:grid-cols-2 gap-8 mt-12">

                    <ProgressCard
                        icon={<BookOpen className="text-blue-600" />}
                        title="Theory Progress"
                        completed={theoryHours}
                        total={course.lectureHours}
                        percentage={theoryPercentage}
                        color="bg-blue-600"
                    />

                    <ProgressCard
                        icon={<FlaskConical className="text-purple-600" />}
                        title="Laboratory Progress"
                        completed={labHours}
                        total={course.labHours}
                        percentage={labPercentage}
                        color="bg-purple-600"
                    />

                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    <StatCard
                        icon={<FileText className="text-green-600" />}
                        title="Resources Uploaded"
                        value={getUploadedResourcesCount(resources)}
                    />

                    <StatCard
                        icon={<BookOpen className="text-orange-600" />}
                        title="Assignments Released"
                        value={getReleasedAssignmentsCount(assignments)}
                    />

                    <StatCard
                        icon={<Bell className="text-red-500" />}
                        title="Announcements"
                        value={getAnnouncementsCount(announcements)}
                    />

                </div>

            </div>

        </section>

    );

}

type ProgressCardProps = {

    icon: React.ReactNode;

    title: string;

    completed: number;

    total: number;

    percentage: number;

    color: string;

};

function ProgressCard({

    icon,

    title,

    completed,

    total,

    percentage,

    color

}: ProgressCardProps) {

    return (

        <Card className="p-8">

            <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">

                    {icon}

                </div>

                <div>

                    <p className="text-slate-500">

                        {title}

                    </p>

                    <h3 className="text-3xl font-black">

                        {completed} / {total} Hours

                    </h3>

                </div>

            </div>

            <div className="mt-8">

                <div className="flex justify-between text-sm mb-2">

                    <span>Progress</span>

                    <span className="font-semibold">

                        {percentage}%

                    </span>

                </div>

                <ProgressBar
                    percentage={percentage}
                    color={color}
                />

            </div>

        </Card>

    );

}


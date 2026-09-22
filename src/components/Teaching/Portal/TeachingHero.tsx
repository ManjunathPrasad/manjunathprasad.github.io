import {
    BookOpen,
    Users,
    GraduationCap,
    FlaskConical
} from "lucide-react";

import HeroButton from "../CourseLayout/HeroButton";
import HeroStatsCard from "../CourseLayout/HeroStatsCard";

import { currentSemesterCourses } from "../../../data/teaching/currentSemesterCourses";

export default function TeachingHero() {

    const activeCourses = currentSemesterCourses.filter(
        (course) => course.status === "Active"
    );

    const totalStudents = activeCourses.reduce(
        (sum, course) => sum + course.students,
        0
    );

    const totalTheoryHours = activeCourses.reduce(
        (sum, course) => sum + course.theoryHours,
        0
    );

    const totalLabHours = activeCourses.reduce(
        (sum, course) => sum + course.labHours,
        0
    );

    return (

        <section
            className="
                relative
                overflow-hidden
                bg-gradient-to-b
                from-blue-50
                via-white
                to-white
                border-b
                border-slate-200
            "
        >

            {/* Background */}

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_top_right,#dbeafe_0%,transparent_40%)]
                    opacity-70
                "
            />

            <div
                className="
                    relative
                    max-w-7xl
                    mx-auto
                    px-6
                    py-24
                "
            >

                {/* Heading */}

                <div
                    className="
                        max-w-4xl
                    "
                >

                    <p
                        className="
                            uppercase
                            tracking-[0.35em]
                            text-blue-600
                            text-sm
                            font-semibold
                        "
                    >
                        Teaching
                    </p>

                    <h1
                        className="
                            mt-5
                            text-5xl
                            md:text-7xl
                            font-black
                            leading-tight
                            text-slate-900
                        "
                    >
                        Teaching is not just
                        <br />

                        delivering lectures.

                    </h1>

                    <p
                        className="
                            mt-8
                            max-w-3xl
                            text-xl
                            leading-9
                            text-slate-600
                        "
                    >
                        Every lecture, laboratory session,
                        assignment and learning resource is
                        organized here to help students learn
                        beyond the classroom.
                    </p>

                </div>

                {/* Buttons */}

                <div
                    className="
                        mt-12
                        flex
                        flex-wrap
                        gap-4
                    "
                >

                    <HeroButton
                        title="Current Courses"
                        href="#current-courses"
                        primary
                    />

                    <HeroButton
                        title="Academic Calendar"
                        href="https://mite.ac.in/wp-content/uploads/2026/06/COE_Summer_Semester_UG_2025-26_Admitted_Batch_2023.pdf"
                    />

                </div>

                {/* Statistics */}

                <div
                    className="
                        mt-20
                        grid
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >

                    <HeroStatsCard
                        icon={BookOpen}
                        value={String(activeCourses.length)}
                        label="Course"
                    />

                    <HeroStatsCard
                        icon={Users}
                        value={String(totalStudents)}
                        label="Students"
                    />

                    <HeroStatsCard
                        icon={GraduationCap}
                        value={String(totalTheoryHours)}
                        label="Theory Hours"
                    />

                    <HeroStatsCard
                        icon={FlaskConical}
                        value={String(totalLabHours)}
                        label="Laboratory Hours"
                    />

                </div>

            </div>

        </section>

    );

}
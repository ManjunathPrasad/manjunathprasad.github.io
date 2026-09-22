import { currentSemesterCourses } from "../../data/teaching/currentSemesterCourses";
import CoursePreviewCard from "./CoursePreviewCard";
import SectionHeader from "../Teaching/CourseLayout/SectionHeader";

export default function CurrentSemesterCourses() {

    const activeCourses = currentSemesterCourses.filter(
        (course) => course.status === "Active"
    );

    if (activeCourses.length === 0) {
        return null;
    }

    return (

        <section
            id="current-courses"
            className="
                scroll-mt-28
                py-20
                border-b
                border-slate-200
            "
        >

            <div className="max-w-7xl mx-auto px-6">

                <SectionHeader
                    eyebrow="Summer Semester 2026"
                    title="Current Courses"
                    description="Courses currently being taught during this semester. Select a course to access lecture journals, laboratory exercises, notes, assignments, announcements and learning resources."
                />

                <div className="mt-14 grid gap-8 lg:grid-cols-2">

                    {activeCourses.map((course) => (

                        <CoursePreviewCard
                            key={course.id}
                            course={course}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}
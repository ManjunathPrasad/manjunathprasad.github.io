import { useCourse } from "../../../context/useCourse";

import SectionHeader from "./SectionHeader";

export default function CourseOverview() {

    const { course } = useCourse();

    return (

            <section
                id="overview"
                className="
                    scroll-mt-36
                    max-w-7xl
                    mx-auto
                    px-6
                    py-20
                "
            >

            <SectionHeader
                eyebrow="Course Introduction"
                title="Course Overview"
                description={course.description}
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">

                {course.objectives.map((objective) => (

                    <div
                        key={objective}
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                        "
                    >
                        {objective}
                    </div>

                ))}

            </div>

        </section>

    );

}
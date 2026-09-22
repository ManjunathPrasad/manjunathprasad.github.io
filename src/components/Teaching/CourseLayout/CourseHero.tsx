type Props = {
    course: {
        code: string;
        title: string;
        duration: string;
        credits: number;
        lectureHours: number;
        labHours: number;
        instructor: string;
        startedOn: string;
        currentModule: string;
    };
};

export default function CourseHero({ course }: Props) {

    return (

        <section className="border-b border-slate-200">

            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div>

                        <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold">
                            {course.code}
                        </p>

                        <h1 className="mt-4 text-5xl md:text-6xl font-black">
                            {course.title}
                        </h1>

                        <p className="mt-4 text-xl text-slate-600">
                            {course.duration}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <span className="px-4 py-2 rounded-full bg-slate-100">
                                {course.credits} Credits
                            </span>

                            <span className="px-4 py-2 rounded-full bg-slate-100">
                                {course.lectureHours} Theory Hours
                            </span>

                            <span className="px-4 py-2 rounded-full bg-slate-100">
                                {course.labHours} Lab Hours
                            </span>

                        </div>

                    </div>

                    <div className="bg-slate-50 rounded-3xl p-8">

                        <p className="text-sm uppercase tracking-wider text-slate-500">
                            Course Status
                        </p>

                        <h3 className="mt-4 text-2xl font-bold">
                            Semester Active
                        </h3>

                        <div className="mt-6 space-y-3">

                            <p>
                                <strong>Started:</strong> {course.startedOn}
                            </p>

                            <p>
                                <strong>Instructor:</strong> {course.instructor}
                            </p>

                            <p>
                                <strong>Current Module:</strong> {course.currentModule}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}
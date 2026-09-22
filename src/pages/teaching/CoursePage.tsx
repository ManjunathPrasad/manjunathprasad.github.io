import { Link, useParams } from "react-router-dom";

import Layout from "../../components/layout/Layout";

import CourseHero from "../../components/Teaching/CourseLayout/CourseHero";
import CourseNavigation from "../../components/Teaching/CourseLayout/CourseNavigation";
import CourseOverview from "../../components/Teaching/CourseLayout/CourseOverview";
import CourseDashboard from "../../components/Teaching/CourseLayout/CourseDashboard";
import CourseSyllabus from "../../components/Teaching/CourseLayout/CourseSyllabus";
import BlowupSyllabus from "../../components/Teaching/CourseLayout/BlowupSyllabus";
import CourseJournal from "../../components/Teaching/CourseLayout/CourseJournal";
import LaboratoryStudio from "../../components/Teaching/CourseLayout/LaboratoryStudio";
import Assignments from "../../components/Teaching/CourseLayout/Assignments";
import ResourceLibrary from "../../components/Teaching/CourseLayout/ResourceLibrary";
import Announcements from "../../components/Teaching/CourseLayout/Announcements";

import { CourseProvider } from "../../context/CourseProvider";
import { useCourse } from "../../context/useCourse";

import { isCourseId } from "../../data/teaching/courseRegistry";

export default function CoursePage() {

    const { courseId } = useParams<{ courseId: string }>();

    if (!isCourseId(courseId)) {

        return (

            <Layout>

                <div className="max-w-3xl mx-auto px-6 py-32 text-center">

                    <h1 className="text-4xl font-black text-slate-900">
                        Course not found
                    </h1>

                    <p className="mt-4 text-slate-600">
                        The course you are looking for does not exist or is no longer available.
                    </p>

                    <Link
                        to="/teaching"
                        className="mt-8 inline-flex font-semibold text-blue-600 hover:text-blue-700"
                    >
                        Back to Teaching
                    </Link>

                </div>

            </Layout>

        );

    }

    return (

        <CourseProvider courseId={courseId}>

            <CoursePageContent />

        </CourseProvider>

    );

}

function CoursePageContent() {

    const { course } = useCourse();

    return (
        <Layout>

            <CourseHero course={course} />

            <CourseNavigation />

            <CourseOverview />

            <Announcements />

            <CourseDashboard />

            <CourseSyllabus />

            <BlowupSyllabus />

            <CourseJournal />

            <LaboratoryStudio />

            <Assignments />

            <ResourceLibrary />

        </Layout>
    );
}

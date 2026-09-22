import Layout from "../components/layout/Layout";

import TeachingHero from "../components/Teaching/Portal/TeachingHero";
import CurrentSemesterCourses from "../components/Teaching/CurrentSemesterCourses";
import TeachingStats from "../components/Teaching/TeachingStats";
import SemesterTimeline from "../components/Teaching/SemesterTimeline";
import QuickLinks from "../components/Teaching/QuickLinks";
import TeachingPhilosophy from "../components/Teaching/Portal/TeachingPhilosophy";

import { currentSemesterCourses } from "../data/teaching/currentSemesterCourses";

export default function TeachingPage() {

    const hasActiveCourses = currentSemesterCourses.some(
        (course) => course.status === "Active"
    );

    return (

        <Layout>

            <TeachingHero />

            <CurrentSemesterCourses />

            {hasActiveCourses && <TeachingStats />}

            {hasActiveCourses && <SemesterTimeline />}

            <QuickLinks />

            <TeachingPhilosophy />

        </Layout>

    );

}
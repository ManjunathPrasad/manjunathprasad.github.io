import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ResearchPage from "../pages/ResearchPage";
import PublicationsPage from "../pages/PublicationsPage";
import TeachingPage from "../pages/TeachingPage";
import ContactPage from "../pages/ContactPage";
import SkillsPage from "../pages/SkillsPage";
// import ProjectsPage from "../pages/ProjectsPage";
import StudentsPage from "../pages/StudentsPage";
import ReadingLifePage from "../pages/ReadingLifePage";
import ArtGalleryPage from "../pages/ArtGalleryPage";
import CoursePage from "../pages/teaching/CoursePage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/research" element={<ResearchPage />} />
                <Route path="/publications" element={<PublicationsPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/teaching" element={<TeachingPage />} />
                <Route path="/teaching/:courseId" element={<CoursePage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* <Route path="/projects" element={<ProjectsPage />} /> */}
                <Route path="/students" element={<StudentsPage />} />
                <Route path="/reading-life" element={<ReadingLifePage />} />
                <Route path= "/art-gallery" element= {<ArtGalleryPage /> } />
            </Routes>
        </BrowserRouter>
    );
}
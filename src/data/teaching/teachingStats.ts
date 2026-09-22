import { currentSemesterCourses } from "./currentSemesterCourses";

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

export const teachingStats = [
    {
        id: 1,
        label: "Courses Offered",
        value: String(activeCourses.length),
    },
    {
        id: 2,
        label: "Students",
        value: String(totalStudents),
    },
    {
        id: 3,
        label: "Theory Hours",
        value: String(totalTheoryHours),
    },
    {
        id: 4,
        label: "Laboratory Hours",
        value: String(totalLabHours),
    }
];

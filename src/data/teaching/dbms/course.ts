import type { CourseInfo } from "../../../types/teaching";

export const dbmsCourse: CourseInfo = {
    code: "23AIPC302",
    title: "Database Management Systems",
    semester: "V Semester",
    duration: "Summer Semester 2026",

    credits: 4,

    lectureHours: 30,
    labHours: 12,

    instructor: "Manjunath Prasad H. R.",

    startedOn: "22 June 2026",
    endDate: "31 July 2026",
    currentModule: "Introduction to Database Systems",

    hoursPerLecture: 2,

    description:
        "Database Management Systems introduces students to database design, relational modelling, SQL, normalization, transaction management and practical database application development.",

    objectives: [
        "Understand the fundamentals of database systems.",
        "Design databases using Entity Relationship modelling.",
        "Apply relational algebra and relational database concepts.",
        "Develop SQL queries for data definition and manipulation.",
        "Understand normalization and transaction management."
    ]
};

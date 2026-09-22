export interface CourseInfo {

    code: string;

    title: string;

    semester: string;

    duration: string;

    credits: number;

    lectureHours: number;
    labHours: number;

    instructor: string;

    startedOn: string;
    currentModule: string;

    description: string;

    objectives: string[];

}

export interface CourseProgress {

    completedTheoryHours: number;
    theoryHours: number;

    completedLabHours: number;
    labHours: number;

    completedClasses: number;
    totalClasses: number;

    assignmentsReleased: number;

}

export interface SyllabusUnit {

    id: number;

    title: string;

    description: string;

    hours: number;

    lectures: number;

    outcomes: string[];

    topics: string[];

}

export type JournalStatus =
    | "Completed"
    | "Current"
    | "Upcoming";

type LectureResource = {

    uploaded: boolean;

    file: string;

};

export interface JournalLecture {

    id: number;

    classNo: number;

    unit: string;

    date: string;

    title: string;

    topics: string[];

    resources: {

        notes: LectureResource;

        slides: LectureResource;

        code: LectureResource;

        reading: LectureResource;

    };

    status: JournalStatus;

}

export type LabStatus =
    | "Completed"
    | "Current"
    | "Upcoming";

type LabResource = {

    uploaded: boolean;

    file: string;

};

export interface Lab {

    id: number;

    experimentNo: number;

    title: string;

    objectives: string[];

    difficulty: "Easy" | "Medium" | "Hard";

    status: LabStatus;

    resources: {

        manual: LabResource;

        code: LabResource;

        solution: LabResource;

    };

}

export interface Assignment {

    id: number;

    title: string;

    dueDate: string;

    status: "Released" | "Upcoming" | "Closed";

}

export type ResourceCategory =
    | "Lecture Notes"
    | "Presentations"
    | "Lab Manuals"
    | "SQL Scripts"
    | "Python Scripts"
    | "Assignments"
    | "Reference Books"
    | "Previous Question Papers";

export interface CourseResource {

    id: number;

    category: ResourceCategory;

    title: string;

    uploaded: boolean;

    file: string;

}

export type AnnouncementType =
    | "General"
    | "Assignment"
    | "Laboratory"
    | "Exam"
    | "Holiday";

export interface Announcement {

    id: number;

    title: string;

    description: string;

    date: string;

    type: AnnouncementType;

    pinned: boolean;

    isNew: boolean;

    attachment?: string;

}

export interface CourseBundle {

    course: CourseInfo;

    progress: CourseProgress;

    syllabus: SyllabusUnit[];

    journal: JournalLecture[];

    labs: Lab[];

    assignments: Assignment[];

    resources: CourseResource[];

    announcements: Announcement[];

}

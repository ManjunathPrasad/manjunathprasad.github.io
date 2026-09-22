import type { CourseBundle } from "../../types/teaching";

import {
    dbmsCourse,
    dbmsProgress,
    dbmsSyllabus,
    dbmsJournal,
    dbmsLabs,
    dbmsResources,
    dbmsAssignments,
    dbmsAnnouncements
} from "./dbms";

import {
    mcppCourse,
    mcppProgress,
    mcppSyllabus,
    mcppJournal,
    mcppLabs,
    mcppResources,
    mcppAssignments,
    mcppAnnouncements
} from "./mcpp";

export const courseRegistry: Record<string, CourseBundle> = {

    dbms: {
        course: dbmsCourse,
        progress: dbmsProgress,
        syllabus: dbmsSyllabus,
        journal: dbmsJournal,
        labs: dbmsLabs,
        resources: dbmsResources,
        assignments: dbmsAssignments,
        announcements: dbmsAnnouncements
    },

    mcpp: {
        course: mcppCourse,
        progress: mcppProgress,
        syllabus: mcppSyllabus,
        journal: mcppJournal,
        labs: mcppLabs,
        resources: mcppResources,
        assignments: mcppAssignments,
        announcements: mcppAnnouncements
    }

};

export type CourseId = keyof typeof courseRegistry;

export function isCourseId(id: string | undefined): id is CourseId {
    return !!id && id in courseRegistry;
}

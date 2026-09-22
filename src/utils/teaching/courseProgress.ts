import type {
    Announcement,
    Assignment,
    CourseInfo,
    CourseResource,
    JournalLecture,
    Lab
} from "../../types/teaching";

const LAB_HOURS_PER_SESSION = 2;

export function getCompletedTheoryClasses(journal: JournalLecture[]) {
    return journal.filter(
        lecture => lecture.status === "Completed"
    ).length;
}

export function getCompletedTheoryHours(
    journal: JournalLecture[],
    course: CourseInfo
) {
    return getCompletedTheoryClasses(journal) * course.hoursPerLecture;
}

export function getTheoryProgressPercentage(
    journal: JournalLecture[],
    course: CourseInfo
) {

    return Math.round(
        (getCompletedTheoryHours(journal, course) / course.lectureHours) * 100
    );

}

export function getCompletedLabSessions(labs: Lab[]) {

    return labs.filter(
        lab => lab.status === "Completed"
    ).length;

}

export function getCompletedLabHours(labs: Lab[]) {

    return getCompletedLabSessions(labs) * LAB_HOURS_PER_SESSION;

}

export function getLabProgressPercentage(labs: Lab[], course: CourseInfo) {

    return Math.round(
        (getCompletedLabHours(labs) / course.labHours) * 100
    );

}

export function getUploadedResourcesCount(resources: CourseResource[]) {

    return resources.filter(
        resource => resource.uploaded
    ).length;

}

export function getReleasedAssignmentsCount(assignments: Assignment[]) {

    return assignments.filter(
        assignment => assignment.status === "Released"
    ).length;

}

export function getAnnouncementsCount(announcements: Announcement[]) {

    return announcements.length;

}

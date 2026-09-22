import type { Announcement } from "../../../types/teaching";

export const dbmsAnnouncements: Announcement[] = [

    {
        id: 1,

        title: "Commencement of Classes",

        description:
            "Summer Semester classes for III Year commence on 22 June 2026. Students are requested to attend all theory and laboratory sessions from the first day.",

        date: "22 Jun 2026",

        type: "General",

        pinned: false,

        isNew: true,

        attachment: ""
    },

    {
        id: 2,

        title: "Continuous Internal Evaluation Test 1 (CIE Test 1)",

        description:
            "Continuous Internal Evaluation Test 1 (CIE Test 1) is scheduled on 10 July 2026 (Friday) and 11 July 2026 (Saturday). Students should complete all Unit 1 topics before the examination.",

        date: "10 Jul 2026",

        type: "Exam",

        pinned: true,

        isNew: true,

        attachment: ""
    },

    // {
    //     id: 3,

    //     title: "Internal Assessment Test 2 (IA Test 2)",

    //     description:
    //         "Internal Assessment Test 2 (T2) will be conducted on 27 July 2026 (Monday), 28 July 2026 (Tuesday) and 29 July 2026 (Wednesday). Students are advised to revise all completed units.",

    //     date: "27 Jul 2026",

    //     type: "Exam",

    //     pinned: true,

    //     isNew: false,

    //     attachment: ""
    // },

    // {
    //     id: 4,

    //     title: "Laboratory Test",

    //     description:
    //         "Laboratory Test (LT) is scheduled on 30 July 2026 (Thursday) and 31 July 2026 (Friday). Students should complete all laboratory experiments and practice SQL programs before the assessment.",

    //     date: "30 Jul 2026",

    //     type: "Laboratory",

    //     pinned: true,

    //     isNew: false,

    //     attachment: ""
    // },

    // {
    //     id: 5,

    //     title: "Practical Examination",

    //     description:
    //         "University Practical Examinations are scheduled to commence on 11 August 2026. Students should complete record submissions and laboratory requirements before the examination.",

    //     date: "11 Aug 2026",

    //     type: "Exam",

    //     pinned: false,

    //     isNew: false,

    //     attachment: ""
    // },

    // {
    //     id: 6,

    //     title: "Theory Examination Schedule",

    //     description:
    //         "Theory Semester Examinations are scheduled from 03 August 2026 to 10 August 2026. Students are advised to prepare according to the university timetable.",

    //     date: "03 Aug 2026 - 10 Aug 2026",

    //     type: "Exam",

    //     pinned: false,

    //     isNew: false,

    //     attachment: ""
    // }

];
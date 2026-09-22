import type { ReactNode } from "react";

import {
    courseRegistry,
    type CourseId
} from "../data/teaching/courseRegistry";

import { CourseContext } from "./CourseContext";

type Props = {

    courseId: CourseId;

    children: ReactNode;

};

export function CourseProvider({

    courseId,

    children

}: Props) {

    return (

        <CourseContext.Provider value={courseRegistry[courseId]}>

            {children}

        </CourseContext.Provider>

    );

}

import { createContext } from "react";

import type { CourseBundle } from "../types/teaching";

import { courseRegistry } from "../data/teaching/courseRegistry";

export const CourseContext = createContext<CourseBundle>(
    courseRegistry.dbms
);

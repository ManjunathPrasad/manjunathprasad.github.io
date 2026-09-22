import type { Lab } from "../../../types/teaching";

export const dbmsLabs: Lab[] = [

    {
        id: 1,

        experimentNo: 1,

        title: "Introduction to SQL Environment",

        objectives: [
            "Install MySQL Workbench",
            "Create a database",
            "Execute simple SQL statements"
        ],

        difficulty: "Easy",

        status: "Upcoming",

        resources: {
            manual: {
                uploaded: false,
                file: ""
            },

            code: {
                uploaded: false,
                file: ""
            },

            solution: {
                uploaded: false,
                file: ""
            }
        }
    },

    {
        id: 2,

        experimentNo: 2,

        title: "DDL Commands",

        objectives: [
            "CREATE TABLE",
            "ALTER TABLE",
            "DROP TABLE"
        ],

        difficulty: "Easy",

        status: "Upcoming",

        resources: {
            manual: {
                uploaded: false,
                file: ""
            },

            code: {
                uploaded: false,
                file: ""
            },

            solution: {
                uploaded: false,
                file: ""
            }
        }
    }

];

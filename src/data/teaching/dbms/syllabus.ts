import type { SyllabusUnit } from "../../../types/teaching";

export const dbmsSyllabus: SyllabusUnit[] = [

    {
        id: 1,

        title: "Database Fundamentals",

        description:
            "Introduction to databases and the DBMS approach.",

        hours: 7,

        labHours: 0,

        lectures: 4,

        topics: [
            "Data vs Information",
            "Database Systems",
            "Database Users",
            "Three-Schema Architecture",
            "Database Languages"
        ],

        outcomes: [
            "Explain database concepts.",
            "Identify DBMS users.",
            "Understand database architecture."
        ]
    },

    {
        id: 2,

        title: "Data Models",

        description:
            "Conceptual database design using ER diagrams.",

        hours: 9,

        labHours: 0,

        lectures: 4,

        topics: [
            "Entities",
            "Attributes",
            "Relationships",
            "Constraints",
            "ER Diagrams"
        ],

        outcomes: [
            "Design ER diagrams.",
            "Identify entities and relationships."
        ]
    },

    {
        id: 3,

        title: "Normalization",

        description:
            "Design Theory and Normalization",

        hours: 8,

        labHours: 0,

        lectures: 5,

        topics: [
            "Relational Model",
            "Keys",
            "DDL",
            "DML",
            "Queries"
        ],

        outcomes: [
            "Write SQL queries.",
            "Create relational schemas."
        ]
    },

    {
        id: 4,

        title: "Query Processing",

        description:
            "Database retrieval and joins & aggregates",

        hours: 9,

        labHours: 0,

        lectures: 4,

        topics: [
            "SQL Data Types",
            "DDL",
            "DML",
            "DCL",
            "Basic Retrieval Queries in SQL",
            "Joins",
            "Aggregates"
        ],

        outcomes: [
            "Normalize database tables."
        ]
    },

    {
        id: 5,

        title: "Transactions & Recovery",

        description:
            "Transaction management and recovery mechanisms.",

        hours: 7,

        labHours: 0,

        lectures: 3,

        topics: [
            "Transactions",
            "ACID Properties",
            "Concurrency",
            "Recovery"
        ],

        outcomes: [
            "Understand transaction processing."
        ]
    }

];
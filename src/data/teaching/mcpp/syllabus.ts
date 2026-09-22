import type { SyllabusUnit } from "../../../types/teaching";

export const mcppSyllabus: SyllabusUnit[] = [

    {
        id: 1,

        title: "Modern Computing Approaches",

        description:
            "Evolution of computing and contemporary computing paradigms including parallel, distributed, cluster, grid, cloud and edge computing.",

        hours: 8,

        labHours: 0,

        lectures: 4,

        topics: [
            "Evolution of Computing",
            "Parallel and Distributed Computing",
            "Cluster Computing",
            "Grid Computing",
            "Cloud Computing",
            "Edge Computing"
        ],

        outcomes: [
            "Describe modern computing approaches and their characteristics.",
            "Differentiate between parallel, distributed, cluster, grid, cloud and edge computing."
        ]
    },

    {
        id: 2,

        title: "Python Fundamentals",

        description:
            "Introduction to Python programming: program structure, variables, data types, operators and I/O statements.",

        hours: 8,

        labHours: 6,

        lectures: 4,

        topics: [
            "Program Structure & Variables",
            "Keywords, Identifiers & Literals",
            "Input and Output Statements",
            "Data Types & Operators",
            "Expressions & Operator Precedence",
            "Type Conversion",
            "Basic Debugging Techniques"
        ],

        outcomes: [
            "Describe fundamental Python programming constructs.",
            "Write Python programs using variables, data types and operators."
        ]
    },

    {
        id: 3,

        title: "Strings, Flow Control, and Functions",

        description:
            "String handling, conditional and looping constructs, and defining and using functions in Python.",

        hours: 8,

        labHours: 6,

        lectures: 4,

        topics: [
            "String Creation & Built-in String Functions",
            "String Indexing, Slicing & Formatting",
            "Conditional Statements (if, if-else, elif)",
            "Looping Statements (for, while) & Nested Loops",
            "break, continue and pass",
            "Defining & Calling Functions",
            "Arguments, Parameters, Global & Local Variables",
            "Lambda Functions & Importing Modules"
        ],

        outcomes: [
            "Write Python programs to solve simple computational problems.",
            "Apply control structures to implement decision-making and iteration.",
            "Design reusable functions and modules."
        ]
    },

    {
        id: 4,

        title: "Built-in Data Structures and Files",

        description:
            "Python's built-in data structures and file handling operations.",

        hours: 8,

        labHours: 6,

        lectures: 4,

        topics: [
            "Lists, Tuples, Sets and Dictionaries",
            "Common Operations on Data Structures",
            "Passing Data Structures to Functions",
            "File Handling: Opening, Reading & Writing",
            "Appending Data & Closing Files"
        ],

        outcomes: [
            "Identify suitable Python built-in data structures and utilise them for problem solving.",
            "Perform file operations for reading, writing and appending data."
        ]
    },

    {
        id: 5,

        title: "Artificial Intelligence and Machine Learning",

        description:
            "Fundamentals of Artificial Intelligence, intelligent agents, and the basics of Machine Learning.",

        hours: 8,

        labHours: 6,

        lectures: 4,

        topics: [
            "Introduction to Artificial Intelligence",
            "History and Evolution of AI",
            "Intelligent Agents: Agents and Environments",
            "Machine Learning: Supervised, Unsupervised & Reinforcement Learning",
            "Machine Learning Workflow & Data Pre-processing",
            "Model Training, Testing and Evaluation"
        ],

        outcomes: [
            "Describe the basics of artificial intelligence and machine learning.",
            "Develop Python programs utilising NumPy, Pandas and Scikit-learn to process datasets."
        ]
    }

];

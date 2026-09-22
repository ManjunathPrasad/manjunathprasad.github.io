import type { Lab } from "../../../types/teaching";

export const mcppLabs: Lab[] = [

    {
        id: 1,
        experimentNo: 1,
        title: "Student Marks Calculator",
        objectives: [
            "Read Student Name, USN, and Marks of three courses",
            "Calculate the Total and Average Marks",
            "Display the Student details in a formatted way"
        ],
        difficulty: "Easy",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    },

    {
        id: 2,
        experimentNo: 2,
        title: "Circle Area and Circumference",
        objectives: [
            "Read the radius of a circle",
            "Calculate and display the area & circumference",
            "Convert the calculated area into an integer and display"
        ],
        difficulty: "Easy",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    },

    {
        id: 3,
        experimentNo: 3,
        title: "Data Types and Operations",
        objectives: [
            "Accept an integer, a floating-point number, a string, and a Boolean value",
            "Display their values and corresponding data types",
            "Perform suitable arithmetic and string operations"
        ],
        difficulty: "Easy",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    },

    {
        id: 4,
        experimentNo: 4,
        title: "Arithmetic Operations",
        objectives: [
            "Accept two numbers from the user",
            "Perform addition, multiplication, division, floor division, modulus and exponentiation",
            "Display the results"
        ],
        difficulty: "Easy",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    },

    {
        id: 5,
        experimentNo: 5,
        title: "String Operations",
        objectives: [
            "Create a string and perform indexing and slicing",
            "Convert the string between uppercase and lowercase",
            "Count the occurrence of a character or substring and replace a word",
            "Split and join strings",
            "Check whether the string starts or ends with a given substring"
        ],
        difficulty: "Medium",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    },

    {
        id: 6,
        experimentNo: 6,
        title: "Menu-Driven Program",
        objectives: [
            "Check whether a number is even or odd",
            "Find the largest of three numbers",
            "Generate the multiplication table of a number",
            "Display all prime numbers within a given range",
            "Exit the program"
        ],
        difficulty: "Medium",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    },

    {
        id: 7,
        experimentNo: 7,
        title: "Functions and Modules",
        objectives: [
            "Find the factorial of a number using a function",
            "Calculate simple interest using a function with default arguments",
            "Use a lambda function to find the square of a number",
            "Create a module mymath.py with addition, subtraction, multiplication and division and import it"
        ],
        difficulty: "Medium",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    },

    {
        id: 8,
        experimentNo: 8,
        title: "List, Tuple and Dictionary Operations",
        objectives: [
            "Create a list of n integers and insert, delete, sort and reverse elements",
            "Create a tuple of student names and display, count and find the index of a name",
            "Create a dictionary of USN to Student Name and add, update, delete and display records",
            "Write functions that accept a List, Tuple, and Dictionary and display their contents"
        ],
        difficulty: "Medium",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    },

    {
        id: 9,
        experimentNo: 9,
        title: "File Handling",
        objectives: [
            "Create a text file, write and append content to it",
            "Read and display file contents and count characters, words and lines",
            "Read a file using read(), readline() and readlines()",
            "Copy the contents of one file into another and verify and display file sizes"
        ],
        difficulty: "Medium",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    },

    {
        id: 10,
        experimentNo: 10,
        title: "Tuples, Sets and Dictionary Records",
        objectives: [
            "Create a tuple of n integers and find the maximum, minimum, count and index of elements",
            "Create two sets and display their union, intersection, difference and symmetric difference",
            "Create a dictionary of Employee ID to Employee Name and add, update, delete and search records"
        ],
        difficulty: "Medium",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    },

    {
        id: 11,
        experimentNo: 11,
        title: "Dataset Exploration with Pandas",
        objectives: [
            "Load the Titanic dataset (Titanic.csv) using Pandas",
            "Display the first five records",
            "Display the dataset information",
            "Display the summary statistics"
        ],
        difficulty: "Hard",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    },

    {
        id: 12,
        experimentNo: 12,
        title: "Train-Test Split with Scikit-learn",
        objectives: [
            "Load the Titanic dataset (Titanic.csv) using Pandas",
            "Select the input features and the target attribute and display them",
            "Split the dataset into training and testing sets",
            "Display the number of training and testing samples"
        ],
        difficulty: "Hard",
        status: "Upcoming",
        resources: {
            manual: { uploaded: false, file: "" },
            code: { uploaded: false, file: "" },
            solution: { uploaded: false, file: "" }
        }
    }

];

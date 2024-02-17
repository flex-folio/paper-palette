export const resume = {
    info: {
        name: "Raazi Muhammed",
        position: "MERN Developer",
        email: "raazi@gmail.com",
        phoneNumber: "+91 2341972233",
        address: "Calicut, Kerala",
        bio: "Self-Taught Graphic Designer Turned Self-Taught  Web Developer",
    },
    expertise: [
        "Node.js",
        "Express.js",
        "Typescript",
        "React.js",
        "Redux",
        "MongoDB",
        "MVC architecutre",
        "SCSS",
        "Jest",
        "RTL",
        "Figma",
        "Firebase",
        "Docker",
    ],
    integrations: [
        "Socket.IO",
        "Razorpay",
        "Cloudinary",
        "SendGrid",
        "Firebase",
        "Node Mailer",
        "Multer",
    ],
    socials: {
        linkedin: {
            url: "www.linkden/raazi",
            name: "raazi-muahmmed",
        },
        github: {
            url: "www.linkden/raazi",
            name: "raazi-muahmmed",
        },
    },
    projects: [
        {
            title: "Lorem Ipsum Project",
            description: [
                {
                    checked: true,
                    point: "Lorem ipsum dolor sit amet.",
                },
                {
                    checked: false,
                    point: "Consectetur adipiscing elit.",
                },
                {
                    checked: true,
                    point: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
            ],
            technologiesUsed: ["HTML5", "CSS3", "JavaScript"],
            urls: {
                gitHub: "https://github.com/username/lorem-ipsum-project",
                liveLink: "https://example.com/lorem-ipsum",
            },
            checked: true,
        },
        {
            title: "Dummy App",
            description: [
                {
                    checked: false,
                    point: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                },
                {
                    checked: true,
                    point: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
            ],
            technologiesUsed: ["React", "Node.js", "MongoDB"],
            urls: {
                gitHub: "https://github.com/username/dummy-app",
                liveLink: "https://example.com/dummy-app",
            },
            checked: false,
        },
    ],
    experiences: [
        {
            company: "Tech Solutions Inc.",
            position: "Software Engineer",
            date: {
                from: new Date("2020-01-01"),
                to: new Date("2022-05-31"),
            },
            points: [
                "Developed and maintained web applications using React and Node.js.",
                "Collaborated with cross-functional teams to deliver high-quality software solutions.",
                "Implemented new features and optimized existing code for better performance.",
            ],
        },
        {
            company: "Data Innovators Co.",
            position: "Data Analyst",
            date: {
                from: new Date("2018-06-15"),
                to: new Date("2019-12-31"),
            },
            points: [
                "Analyzed and interpreted complex data sets to provide actionable insights.",
                "Created data visualizations and reports using tools like Tableau and Power BI.",
                "Collaborated with business stakeholders to understand data requirements and deliver solutions.",
            ],
        },
    ],
    educations: [
        {
            title: "Bachelor of Science in Computer Science",
            date: new Date("2016-09-01"),
            description: "University of Science and Technology, Cityville",
        },
    ],
};

type Resume = {
    info: {
        name: String;
        position: String[];
        email: String;
        phoneNumber: String;
        address: String[];
        bio: String[];
    };
    expertise: String[];
    integrations: String[];
    socials: {
        linkedin: {
            url: String;
            name: String;
        };
        github: {
            url: String;
            name: String;
        };
    };
    projects: [
        {
            title: String;
            description: [
                {
                    checked: Boolean;
                    point: String;
                }
            ];
            technologiesUsed: String[];
            urls: {
                gitHub?: String;
                liveLink?: String;
            };
            checked: boolean;
        }
    ];
    education: [
        {
            title: String;
            date: Date;
            description: String;
        }
    ];
    experience: [
        {
            company: String;
            position: String;
            date: {
                from: Date;
                to: Date;
            };
            points: String[];
        }
    ];
};

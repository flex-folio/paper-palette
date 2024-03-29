import { ResumeType } from "@/types/resumeTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ResumeType = {
    info: {
        name: "Raazi Muhammed",
        position: [
            { checked: true, value: "MERN Developer" },
            { checked: false, value: "Software Developer" },
        ],
        email: { checked: true, value: "raazi@gmail.com" },
        phone: { checked: true, value: "+91 2341972233" },
        address: [
            {
                checked: true,
                value: "Calicut, Kerala",
            },
            {
                checked: false,
                value: "Bangluru, India",
            },
        ],
        bio: [
            {
                checked: true,
                value: "Self-Taught Graphic Designer Turned Self-Taught  Web Developer",
            },
            {
                checked: false,
                value: "Secondary bio",
            },
        ],
    },
    skills: [
        {
            heading: "expertise",
            points: [
                {
                    checked: false,
                    order: 1,
                    value: "Node.js",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Express.js",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Typescript",
                },
                {
                    checked: true,
                    order: 1,
                    value: "React.js",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Redux",
                },
                {
                    checked: true,
                    order: 1,
                    value: "MongoDB",
                },
                {
                    checked: true,
                    order: 1,
                    value: "MVC architecutre",
                },
                {
                    checked: true,
                    order: 1,
                    value: "SCSS",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Jest",
                },
                {
                    checked: true,
                    order: 1,
                    value: "RTL",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Figma",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Firebase",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Docker",
                },
            ],
        },
        {
            heading: "integrations",

            points: [
                {
                    checked: true,
                    order: 1,
                    value: "Socket.IO",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Razorpay",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Cloudinary",
                },
                {
                    checked: true,
                    order: 1,
                    value: "SendGrid",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Firebase",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Node Mailer",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Multer",
                },
            ],
        },
    ],
    socials: [
        {
            checked: true,
            name: "Linkden",
            url: "www.linkden/raazi",
            username: "raazi-muahmmed",
        },
        {
            checked: true,
            name: "Github",
            url: "www.linkden/raazi",
            username: "raazi-muahmmed",
        },
    ],
    projects: [
        {
            title: "Lorem Ipsum Project",
            description: [
                {
                    order: 1,
                    checked: true,
                    value: "Lorem ipsum dolor sit amet.",
                },
                {
                    order: 1,
                    checked: false,
                    value: "Consectetur adipiscing elit.",
                },
                {
                    order: 1,
                    checked: true,
                    value: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
            ],
            technologiesUsed: [
                {
                    checked: true,
                    order: 1,
                    value: "HTML5",
                },
                {
                    checked: true,
                    order: 1,
                    value: "CSS3",
                },
                {
                    checked: true,
                    order: 1,
                    value: "JavaScript",
                },
            ],
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
                    order: 1,
                    checked: true,
                    value: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                },
                {
                    order: 1,
                    checked: true,
                    value: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
            ],
            technologiesUsed: [
                {
                    checked: true,
                    order: 1,
                    value: "React",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Node.js",
                },
                {
                    checked: true,
                    order: 1,
                    value: "MongoDB",
                },
            ],
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
                {
                    checked: true,
                    order: 1,
                    value: "Developed and maintained web applications using React and Node.js.",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Collaborated with cross-functional teams to deliver high-quality software solutions.",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Implemented new features and optimized existing code for better performance.",
                },
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
                {
                    checked: true,
                    order: 1,
                    value: "Analyzed and interpreted complex data sets to provide actionable insights.",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Created data visualizations and reports using tools like Tableau and Power BI.",
                },
                {
                    checked: true,
                    order: 1,
                    value: "Collaborated with business stakeholders to understand data requirements and deliver solutions.",
                },
            ],
        },
    ],
    educations: [
        {
            title: "Bachelor of Science in Computer Science",
            date: new Date("2016-09-01"),
            description: [
                {
                    checked: true,
                    order: 1,
                    value: "University of Science and Technology, Cityville",
                },
            ],
        },
    ],
};
export const resume = createSlice({
    name: "resume",
    initialState,
    reducers: {
        changeInfoBio: (state, { payload }: { payload: number }) => {
            state.info.bio = state.info.bio.map((_bio, index) => {
                _bio.checked = index === payload ? true : false;
                return _bio;
            });
        },
        addInfoBio: (state, { payload }: { payload: string }) => {
            state.info.bio.push({
                checked: false,
                value: payload,
            });
        },
        removeInfoBio: (state, { payload }: { payload: number }) => {
            state.info.bio = state.info.bio.filter((_bio, index) => {
                if (index === payload) return null;
                return _bio;
            });
        },
        toggleSkill: (
            state,
            { payload }: { payload: { heading: string; index: number } }
        ) => {
            state.skills.map((cat) => {
                if (cat.heading === payload.heading) {
                    const currentState = cat.points[payload.index].checked;
                    cat.points[payload.index].checked = !currentState;
                }
            });
        },
        addSkill: (
            state,
            { payload }: { payload: { heading: string; value: string } }
        ) => {
            for (let i = 0; i < state.skills.length; i++) {
                if (
                    state.skills[i].heading ==
                    payload.heading.toLocaleLowerCase()
                ) {
                    console.log(state.skills);

                    state.skills[i].points.push({
                        checked: true,
                        order: 1,
                        value: payload.value,
                    });
                    break;
                }
            }
        },
        removeSkill: (
            state,
            { payload }: { payload: { heading: string; index: number } }
        ) => {
            state.skills.map((cat) => {
                if (cat.heading === payload.heading.toLocaleLowerCase()) {
                    cat.points = cat.points.filter((point, i) => {
                        if (i !== payload.index) return point;
                    });
                }
            });
        },
        addSocialMedia: (
            state,
            {
                payload,
            }: { payload: { url: string; username: string; name: string } }
        ) => {
            state.socials.push({
                checked: true,
                url: payload.url,
                username: payload.username,
                name: payload.name,
            });
        },
        toggleSocialMedia: (
            state,
            { payload }: { payload: { index: number } }
        ) => {
            state.socials.map((social, i) => {
                if (i === payload.index) {
                    social.checked = !social.checked;
                }
            });
        },
        removeSocialMedia: (
            state,
            { payload }: { payload: { index: number } }
        ) => {
            state.socials = state.socials.filter((social, i) => {
                if (i !== payload.index) return social;
            });
        },
        addContactInfo: (
            state,
            { payload }: { payload: { type: string; value: string } }
        ) => {
            // @ts-ignore
            state.info[payload.type].value = payload.value;
        },
        toggleContactInfo: (
            state,
            { payload }: { payload: { type: string } }
        ) => {
            // @ts-ignore
            const currentState = state.info[payload.type].checked;
            // @ts-ignore
            state.info[payload.type].checked = !currentState;
        },
        editName: (state, { payload }: { payload: string }) => {
            state.info.name = payload;
        },
        toggleProjectDescription: (
            state,
            { payload }: { payload: { project: string; index: number } }
        ) => {
            state.projects.map((project) => {
                if (project.title === payload.project) {
                    const currentState =
                        project.description[payload.index].checked;

                    project.description[payload.index].checked = !currentState;
                }
            });
        },
        toggleProjectTechnologies: (
            state,
            { payload }: { payload: { project: string; index: number } }
        ) => {
            state.projects.map((project) => {
                if (project.title === payload.project) {
                    const currentState =
                        project.technologiesUsed[payload.index].checked;

                    project.technologiesUsed[payload.index].checked =
                        !currentState;
                }
            });
        },
        addProjectDescription: (
            state,
            { payload }: { payload: { project: string; description: string } }
        ) => {
            for (let i = 0; i < state.projects.length; i++) {
                if (state.projects[i].title == payload.project) {
                    state.projects[i].description.push({
                        checked: true,
                        order: 1,
                        value: payload.description,
                    });
                    break;
                }
            }
        },
        addProjectTechnologies: (
            state,
            { payload }: { payload: { project: string; tech: string } }
        ) => {
            for (let i = 0; i < state.projects.length; i++) {
                if (state.projects[i].title == payload.project) {
                    state.projects[i].technologiesUsed.push({
                        checked: true,
                        order: 1,
                        value: payload.tech,
                    });
                    break;
                }
            }
        },
        removeProjectDescription: (
            state,
            {
                payload,
            }: { payload: { projectIndex: number; descriptionIndex: number } }
        ) => {
            state.projects[payload.projectIndex].description = state.projects[
                payload.projectIndex
            ].description.filter((val, i) => {
                if (i !== payload.descriptionIndex) return val;
            });
        },
        removeProjectTechnologies: (
            state,
            {
                payload,
            }: { payload: { projectIndex: number; techIndex: number } }
        ) => {
            state.projects[payload.projectIndex].technologiesUsed =
                state.projects[payload.projectIndex].technologiesUsed.filter(
                    (val, i) => {
                        if (i !== payload.techIndex) return val;
                    }
                );
        },
        addProject: (state, { payload }: { payload: { name: string } }) => {
            state.projects.push({
                title: payload.name,
                description: [],
                technologiesUsed: [],
                urls: {},
                checked: true,
            });
        },
    },
});

export const {
    editName,
    changeInfoBio,
    addInfoBio,
    removeInfoBio,
    toggleSkill,
    addSkill,
    addContactInfo,
    removeSkill,
    addSocialMedia,
    toggleSocialMedia,
    removeSocialMedia,
    toggleContactInfo,
    toggleProjectDescription,
    toggleProjectTechnologies,
    addProjectDescription,
    addProjectTechnologies,
    removeProjectDescription,
    removeProjectTechnologies,
    addProject,
} = resume.actions;
export default resume.reducer;

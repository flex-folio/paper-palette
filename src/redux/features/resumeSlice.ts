import { resumeDummyData } from "@/lib/resumeDummyData";
import { ResumeType } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ResumeType = resumeDummyData;
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

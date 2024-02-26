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
        editProjectTitle: (
            state,
            { payload }: { payload: { projectIndex: number; title: string } }
        ) => {
            state.projects[payload.projectIndex].title = payload.title;
        },
        addExperienceDescription: (
            state,
            {
                payload,
            }: { payload: { experienceIndex: number; description: string } }
        ) => {
            state.experiences[payload.experienceIndex].points.push({
                checked: true,
                order: 1,
                value: payload.description,
            });
        },
        toggleExperienceDescription: (
            state,
            {
                payload,
            }: {
                payload: { experienceIndex: number; descriptionIndex: number };
            }
        ) => {
            state.experiences[payload.experienceIndex].points.map(
                (point, index) => {
                    if (index === payload.descriptionIndex) {
                        point.checked = !point.checked;
                    }
                    return point;
                }
            );
        },
        removeExperienceDescription: (
            state,
            {
                payload,
            }: {
                payload: { experienceIndex: number; descriptionIndex: number };
            }
        ) => {
            state.experiences[payload.experienceIndex].points =
                state.experiences[payload.experienceIndex].points.filter(
                    (point, index) => {
                        if (index !== payload.descriptionIndex) {
                            return point;
                        }
                    }
                );
        },
        editExperienceDate: (
            state,
            {
                payload,
            }: {
                payload: {
                    experienceIndex: number;
                    fromDate: Date;
                    toDate: Date;
                };
            }
        ) => {
            state.experiences[payload.experienceIndex].date.from =
                payload.fromDate;
            state.experiences[payload.experienceIndex].date.to = payload.toDate;
        },
        editExperienceTitle: (
            state,
            {
                payload,
            }: {
                payload: {
                    experienceIndex: number;
                    company: string;
                    position: string;
                };
            }
        ) => {
            state.experiences[payload.experienceIndex].company =
                payload.company;
            state.experiences[payload.experienceIndex].position =
                payload.position;
        },
        addExperience: (
            state,
            { payload }: { payload: { company: string; position: string } }
        ) => {
            state.experiences.push({
                company: payload.company,
                position: payload.position,
                date: {
                    to: new Date(),
                    from: new Date(),
                },
                points: [],
            });
        },
        addEducationDescription: (
            state,
            {
                payload,
            }: { payload: { educationIndex: number; description: string } }
        ) => {
            state.educations[payload.educationIndex].description.push({
                checked: true,
                order: 1,
                value: payload.description,
            });
        },
        toggleEducationDescription: (
            state,
            {
                payload,
            }: { payload: { educationIndex: number; descriptionIndex: number } }
        ) => {
            const currentState =
                state.educations[payload.educationIndex].description[
                    payload.descriptionIndex
                ].checked;

            state.educations[payload.educationIndex].description[
                payload.descriptionIndex
            ].checked = !currentState;
        },
        editEducationDate: (
            state,
            {
                payload,
            }: {
                payload: {
                    educationIndex: number;
                    fromDate: Date;
                    toDate: Date;
                };
            }
        ) => {
            state.educations[payload.educationIndex].date.from =
                payload.fromDate;
            state.educations[payload.educationIndex].date.to = payload.toDate;
        },
        editEducationTitle: (
            state,
            {
                payload,
            }: {
                payload: {
                    educationIndex: number;
                    title: string;
                };
            }
        ) => {
            state.educations[payload.educationIndex].title = payload.title;
        },
        addEducation: (state, { payload }: { payload: { name: string } }) => {
            state.educations.push({
                title: payload.name,
                date: {
                    to: new Date(),
                    from: new Date(),
                },
                description: [],
            });
        },
        changeInfoPosition: (
            state,
            { payload }: { payload: { index: number } }
        ) => {
            state.info.position.map((pos, index) => {
                if (index === payload.index) {
                    pos.checked = true;
                } else {
                    pos.checked = false;
                }
            });
        },
        deleteInfoPosition: (
            state,
            { payload }: { payload: { index: number } }
        ) => {
            state.info.position = state.info.position.filter((pos, index) => {
                if (index !== payload.index) return pos;
            });
        },
        addInfoPosition: (
            state,
            { payload }: { payload: { value: string } }
        ) => {
            state.info.position.push({
                checked: false,
                value: payload.value,
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
    addExperienceDescription,
    toggleExperienceDescription,
    removeExperienceDescription,
    editExperienceDate,
    editExperienceTitle,
    addExperience,
    editProjectTitle,
    addEducationDescription,
    toggleEducationDescription,
    editEducationDate,
    editEducationTitle,
    addEducation,
    changeInfoPosition,
    deleteInfoPosition,
    addInfoPosition,
} = resume.actions;
export default resume.reducer;

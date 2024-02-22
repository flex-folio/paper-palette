export type ResumeType = {
    info: {
        name: string;
        position: { checked: boolean; value: string }[];
        email: string;
        phoneNumber: string;
        address: { checked: boolean; value: string }[];
        bio: { value: string; checked: boolean }[];
    };
    skills: SkillType[];
    socials: SocialMediaType[];
    projects: ProjectType[];
    educations: EducationType[];
    experiences: ExperienceType[];
};

export type ProjectType = {
    title: string;
    description: {
        checked: boolean;
        value: string;
        order: number;
    }[];
    technologiesUsed: { checked: boolean; value: string; order: number }[];
    urls: {
        gitHub?: string;
        liveLink?: string;
    };
    checked: boolean;
};

export type EducationType = {
    title: string;
    date: Date;
    description: { checked: boolean; value: string; order: number }[];
};

export type ExperienceType = {
    company: string;
    position: string;
    date: {
        from: Date;
        to: Date;
    };
    points: { checked: boolean; value: string; order: number }[];
};

export type SocialMediaType = {
    name: string;
    url: string;
    username: string;
    checked: boolean;
};

export type SkillType = {
    heading: string;
    points: { checked: boolean; order: number; value: string }[];
};

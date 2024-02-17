export type ResumeType = {
    info: {
        name: string;
        position: { checked: boolean; value: string }[];
        email: string;
        phoneNumber: string;
        address: { checked: boolean; value: string }[];
        bio: { value: string; checked: boolean }[];
    };
    sidebarPoints: {
        heading: string;
        points: { checked: true; order: number; value: string }[];
    }[];
    socials: SocialMediaType[];
    projects: ProjectType[];
    educations: EducationType[];
    experiences: ExperienceType[];
};

type ProjectType = {
    title: string;
    description: {
        checked: boolean;
        point: string;
        order: number;
    }[];
    technologiesUsed: { checked: boolean; value: string; order: number }[];
    urls: {
        gitHub?: string;
        liveLink?: string;
    };
    checked: boolean;
};

type EducationType = {
    title: string;
    date: Date;
    description: { checked: boolean; value: string; order: number }[];
};

type ExperienceType = {
    company: string;
    position: string;
    date: {
        from: Date;
        to: Date;
    };
    points: { checked: boolean; value: string; order: number }[];
};

type SocialMediaType = {
    name: string;
    url: string;
    username: string;
    checked: boolean;
};

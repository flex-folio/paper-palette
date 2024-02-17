export type ResumeType = {
    info: {
        name: string;
        position: string[];
        email: string;
        phoneNumber: string;
        address: string[];
        bio: { value: string; checked: boolean }[];
    };
    expertise: string[];
    integrations: string[];
    socials: {
        linkedin: {
            url: string;
            name: string;
        };
        github: {
            url: string;
            name: string;
        };
    };
    projects: {
        title: string;
        description: {
            checked: boolean;
            point: string;
        }[];
        technologiesUsed: string[];
        urls: {
            gitHub?: string;
            liveLink?: string;
        };
        checked: boolean;
    }[];

    educations: {
        title: string;
        date: Date;
        description: string;
    }[];
    experiences: {
        company: string;
        position: string;
        date: {
            from: Date;
            to: Date;
        };
        points: string[];
    }[];
};

type CV = {
    presentation: {
        fullname: string;
        name: string;
        surnames: string;
    };
    skills: Array<{
        title: string;
        icon: string;
        labels: string[];
    }>;
    education: Array<{
        company: string;
        icon: string;
        location: string;
        start: string;
        end: string;
        years: Array<{
            start: string;
            end: string;
            title: string;
            honors: string[];
        }>;
    }>;
    experience: Array<{
        company: string;
        image: string;
        positions: {
            title: string;
            description: string[];
            skills: string[];
        };
        start: string;
        end: string;
        location: string;
    }>;
    projects: Array<{
        id: string;
        title: string;
        description: string;
        img: string;
        links: Array<{
            title: string;
            url: string;
        }>;
    }>;
};

export type { CV };

type Presentation = {
    fullname: string;
    name: string;
    surnames: string;
};

type Skills = {
    title: string;
    icon: string;
    labels: string[];
};

type Education = {
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
};

type Experience = {
    company: string;
    image: string;
    position: {
        title: string;
        description: string[];
        skills: string[];
    };
    start: string;
    end: string;
    location: string;
};

type Projects = {
    id: string;
    title: string;
    description: string;
    img: string;
    links: Array<{
        title: string;
        url: string;
    }>;
};

type CV = {
    presentation: Presentation;
    skills: Array<Skills>;
    education: Array<Education>;
    experience: Array<Experience>;
    projects: Array<Projects>;
};

export type { CV, Presentation, Skills, Education, Experience, Projects };

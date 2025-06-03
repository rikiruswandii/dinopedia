
export interface CladeItem {
    clade: string;
    count: number;
}

export interface DietItem {
    diet: string;
    count: number;
}

export interface LocomotionItem {
    locomotionType: string;
    count: number;
}

export interface Clades {
    uniqueClades: number;
    data: CladeItem[];
}

export interface Locomotions {
    uniqueLocomotions: number;
    data: LocomotionItem[];
}

export interface Diets {
    uniqueDiets: number;
    data: DietItem[];
}

export interface Chart {
    clades: CladeItem[];
    diets: DietItem[];
    locomotions: LocomotionItem[];
}

export interface imageInfo {
    src: string;
    alt: string;
    title: string;
}

export interface Benefit {
    label: string;
    image: imageInfo;
}
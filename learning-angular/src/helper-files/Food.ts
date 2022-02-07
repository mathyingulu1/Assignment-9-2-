export interface Food {
    readonly id: number;
    type?: string;
    name: string;
    imageUrl: string;
    body: string;
    taste?: string;
    tags?: string[];
}
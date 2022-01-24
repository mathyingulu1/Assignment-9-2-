export interface Food {
    readonly id: number;
    type: string;
    imageUrl: string;
    body: string;
    taste?: string;
}
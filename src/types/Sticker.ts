export class Sticker {
    readonly id: number;
    title: string;
    emoji: string;
    color: number;

    constructor(id: number, title: string, emoji: string, color: number) {
        this.id = id;
        this.title = title;
        this.emoji = emoji;
        this.color = color;
    }
}

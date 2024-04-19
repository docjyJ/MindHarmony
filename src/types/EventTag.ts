export interface JsonEventTag {
    id: number;
    title: string;
    emoji: string;
    color: number;
}

export class EventTag {
    readonly id: number;
    readonly title: string;
    readonly emoji: string;
    readonly color: number;

    private constructor(id: number, title: string, emoji: string, color: number) {
        this.id = id;
        this.title = title;
        this.emoji = emoji;
        this.color = color;
    }

    static fromJson(json: JsonEventTag): EventTag {
        return new EventTag(json.id, json.title, json.emoji, json.color);
    }

    toJson(): JsonEventTag {
        return {
            id: this.id,
            title: this.title,
            emoji: this.emoji,
            color: this.color
        };
    }
}

import {EventTag} from "./EventTag";

export enum Rating {
    EXTREMELY_BAD = 0,
    VERY_BAD = 1,
    BAD = 2,
    NEUTRAL = 3,
    GOOD = 4,
    VERY_GOOD = 5,
    EXTREMELY_GOOD = 6

}

export class EntryDate {
    readonly year: number
    readonly month: number
    readonly day: number
    readonly dayOfWeek: number
    readonly weekNumber: number
    readonly monthShort: string
    readonly dayLong: string

    constructor(date: Date) {
        this.year = date.getFullYear()
        this.month = date.getMonth()
        this.day = date.getDate()
        this.dayOfWeek = date.getDay()
        if (this.dayOfWeek === 0) this.dayOfWeek = 7
        this.weekNumber = Math.floor((date.getTime() + 259200000) / 604800000)
        this.monthShort = date.toLocaleDateString('fr-FR', {month: 'short'}).toUpperCase()
        this.dayLong = date.toLocaleDateString('fr-FR', {weekday: 'long'})
    }

    toString(): string {
        return `${this.year}-${this.month}-${this.day}`
    }

    static greaterThan(up: EntryDate, down: EntryDate) {
        if (up.weekNumber !== down.weekNumber)
            return up.weekNumber > down.weekNumber ? 1 : -1
        if (up.dayOfWeek !== down.dayOfWeek)
            return up.dayOfWeek > down.dayOfWeek ? 1 : -1
        return 0
    }

}

export interface JsonDailyEntry {
    date: string
    mood: number
    story: string
    tags: number[]
}

export class DailyEntry {
    readonly date: EntryDate
    readonly mood: Rating
    readonly story: string
    readonly tags: EventTag[]

    private constructor(date: EntryDate, rating: Rating, message: string, tags: EventTag[]) {
        this.date = date
        this.mood = rating
        this.story = message
        this.tags = tags
    }

    static fromJson(json: JsonDailyEntry, tags: EventTag[]): DailyEntry {
        return new DailyEntry(
            new EntryDate(new Date(json.date)),
            json.mood,
            json.story,
            tags.filter(tag => json.tags.includes(tag.id))
        )
    }

    toJson(): JsonDailyEntry {
        return {
            date: this.date.toString(),
            mood: this.mood,
            story: this.story,
            tags: this.tags.map(tag => tag.id)
        }
    }
}


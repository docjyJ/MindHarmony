import {Sticker} from "./Sticker";

export enum Rating {
    EXTREMELY_BAD = 0,
    VERY_BAD = 1,
    BAD = 2,
    NEUTRAL = 3,
    GOOD = 4,
    VERY_GOOD = 5,
    EXTREMELY_GOOD = 6

}

export class DateOnly {
    private readonly _date = new Date(0)

    getFullYear = this._date.getFullYear
    setFullYear = this._date.setFullYear
    getMonth = this._date.getMonth
    setMonth = this._date.setMonth
    getDate = this._date.getDate
    setDate = this._date.setDate

    toString() {
        return this._date.toISOString().slice(0, 10)
    }

    valueOf() {
        return this._date.valueOf() % 86400000
    }

    get year() {
        return this._date.getFullYear()
    }

    get month() {
        return this._date.getMonth()
    }

    get dayOfMonth() {
        return this._date.getDate()
    }

    get dayOfWeek() {
        if (this._date.getDay() === 0) return 7
        return this._date.getDay()
    }

    get week() {
        return Math.floor((this.valueOf() - 4) / 7)
    }

    fullLocale(locales = 'fr-FR') {
        return this._date.toLocaleDateString(locales, {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})
    }

    monthShortLocale(locales = 'fr-FR') {
        return this._date.toLocaleDateString(locales, {month: 'long'}).toUpperCase()
    }

    weekDayLocale(locales = 'fr-FR') {
        return this._date.toLocaleDateString(locales, {weekday: 'long'})
    }
}

export class Journal {
    private readonly _date = new DateOnly()
    private readonly _stickers: Sticker[] = []
    private _rate
    private _story

    constructor(date: Date | DateOnly, rate: Rating, story: string, stickers: Sticker[]) {
        this._date.setDate(date.getDate())
        this._date.setMonth(date.getMonth())
        this._date.setFullYear(date.getFullYear())
        this._rate = rate;
        this._story = story;
        stickers.forEach(sticker => this._stickers.push(sticker));
    }

    get date(): DateOnly {
        return this._date;
    }

    get stickers(): Sticker[] {
        return this._stickers;
    }

    get rate(): Rating {
        return this._rate;
    }

    set rate(value: Rating) {
        this._rate = value;
    }

    get story(): string {
        return this._story;
    }

    set story(value: string) {
        this._story = value;
    }
}


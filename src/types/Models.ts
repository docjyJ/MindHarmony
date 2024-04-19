import type {JsonEventTag} from "./EventTag";
import type {JsonDailyEntry} from "./DailyEntry";
import {EventTag} from "./EventTag";
import {DailyEntry, EntryDate} from "./DailyEntry";

export interface JsonModels {
    tags: JsonEventTag[];
    entries: JsonDailyEntry[];
}

export type WeeklyEntry = { [weekNumber: number]: DailyEntry[] }

export class Models {
    tags: EventTag[];
    entries: DailyEntry[];

    private constructor(tags: EventTag[], entries: DailyEntry[]) {
        this.tags = tags;
        this.entries = entries;
    }

    sortEntriesByDate(): DailyEntry[] {
        return this.entries.sort((a: DailyEntry, b: DailyEntry) => {
            return EntryDate.greaterThan(b.date, a.date)
        })
    }

    entriesGroupByWeek(): WeeklyEntry {
        return this.sortEntriesByDate().reduce((acc: WeeklyEntry, item: DailyEntry) => {
            const weekNumber = - item.date.weekNumber
            if (!acc[weekNumber])
                acc[weekNumber] = []
            acc[weekNumber].push(item)
            return acc
        }, {})
    }

    static empty(): Models {
        return new Models([], [])
    }

    static fromJson(json: JsonModels): Models {
        const tags = json.tags.map(tag => EventTag.fromJson(tag))
        const entries = json.entries.map(entry => DailyEntry.fromJson(entry, tags))
        return new Models(tags, entries)
    }

    toJson(): JsonModels {
        return {
            tags: this.tags.map(tag => tag.toJson()),
            entries: this.entries.map(entry => entry.toJson())
        }
    }
}

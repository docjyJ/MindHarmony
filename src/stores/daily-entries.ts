import {defineStore} from "pinia";
import type {DailyEntry} from "@/types/DailyEntry";
import type {EventTag} from "@/types/EventTag";

export const useDailyEntries = defineStore({
    id: "daily-entries",
    state: () => ({
        entries: [] as DailyEntry[],
        tags: [] as EventTag[],
    }),
    getters: {
        dailyEntries: state => state.entries,
        eventTags: state => state.tags,
        entryByDate: (state) => (year: number, month: number, day: number) =>
            state.entries.find(e => e.date.year === year && e.date.month === month && e.date.day === day),
    },
    actions: {
        appendEntry(entry: DailyEntry): void {
            this.entries.push(entry);
        },
        appendTag(tag: EventTag): void {
            this.tags.push(tag);
        }
    },
});

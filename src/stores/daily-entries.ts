import { defineStore } from "pinia";
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

import {defineStore} from "pinia";
import {Journal} from "@/types/Journal";
import type {Sticker} from "@/types/Sticker";

export const useJournals = defineStore({
    id: "journals",
    state: () => ({
        entries: [] as Journal[],
        stickers: [] as Sticker[],
    }),
    getters: {
        getJournal(state) {
            return (year: number, month: number, day: number) =>
                state.entries.find(j => j.date.year === year && j.date.month === month && j.date.dayOfMonth === day);
        },
        getSticker(state) {
            return (id: number) => state.stickers.find(s => s.id === id);
        }
    },
    actions: {
    },
});

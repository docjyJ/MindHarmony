import {Sticker} from "@/types/Sticker";
import {Journal} from "@/types/Journal";

interface JsonJournal {
    date: string
    rate: number
    story: string
    stickers: number[]
}

interface JsonSticker {
    id: number;
    title: string;
    emoji: string;
    color: number;
}

export interface JsonModels {
    version: number;
    stickers: JsonSticker[];
    journals: JsonJournal[];
}

export interface Models {
    stickers: Sticker[];
    journals: Journal[];
}

function JsonToJournal(json: JsonJournal, stickers: Sticker[]): Journal {
    return new Journal(
        new Date(json.date),
        json.rate,
        json.story,
        stickers.filter(sticker => json.stickers.includes(sticker.id))
    )
}

function JournalToJSON(journal: Journal): JsonJournal {
    return {
        date: journal.date.toString(),
        rate: journal.rate,
        story: journal.story,
        stickers: journal.stickers.map(sticker => sticker.id)
    }
}

function JsonToSticker(json: JsonSticker): Sticker {
    return new Sticker(json.id, json.title, json.emoji, json.color);
}

function StickerToJson(sticker: Sticker): JsonSticker {
    return {
        id: sticker.id,
        title: sticker.title,
        emoji: sticker.emoji,
        color: sticker.color
    };
}

export function JsonToModels(json: JsonModels): Models {
    if(json.version !== 1) throw new Error('Unsupported version');
    const stickers = json.stickers.map(JsonToSticker);
    const journals = json.journals.map(journal => JsonToJournal(journal, stickers));
    return {stickers, journals}
}

export function ModelsToJson(models: Models): JsonModels {
    return {
        version: 1,
        stickers: models.stickers.map(StickerToJson),
        journals: models.journals.map(JournalToJSON)
    }
}

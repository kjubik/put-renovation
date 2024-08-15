import type { RecordModel } from "pocketbase";

export interface project extends RecordModel {
    custom_id: string,
    title: string,
}

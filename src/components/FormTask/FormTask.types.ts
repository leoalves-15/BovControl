import { task } from "../../types/Task.type";

export type FormTaskProps = {
    disabled?: boolean;
    textButton?: string;
    task?: task;
    saveText?: string;
    send?: (e: Event, data: task) => void;
    update?: (e: Event, data: task) => void;
    idList?: number;
};

export type Position = {
    lat: number;
    lng: number;
};

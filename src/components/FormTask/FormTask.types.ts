import { task } from "../../types/Task.type";

export type FormTaskProps = {
    disabled?: boolean;
    textButton?: string;
    task?: task;
    saveText?: string;
    send?: (e: { preventDefault: () => void }, data: task) => void;
    update?: (e: { preventDefault: () => void }, data: task) => void;
    idList?: number;
};

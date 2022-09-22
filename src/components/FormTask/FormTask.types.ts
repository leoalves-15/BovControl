import { task } from "../../types/Task.type";

export type FormTaskProps = {
    disabled?: boolean;
    textButton?: string;
    task?: task;
    send?: (e: { preventDefault: () => void }) => void;
};

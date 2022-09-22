import { task } from "../../types/Task.type";

export type FormTaskProps = {
    disabled?: boolean;
    task?: task;
    send?: () => void;
};

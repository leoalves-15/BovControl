import { Dispatch, SetStateAction } from "react";

export type deleteProps = {
    id?: string;
    close: Dispatch<SetStateAction<boolean>>;
    update: Dispatch<SetStateAction<boolean>>;
}
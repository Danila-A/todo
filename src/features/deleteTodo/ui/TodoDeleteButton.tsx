import type { FC } from "react";
import { TrashIcon } from "../../../shared";
import styles from './TodoDeleteButton.module.scss';
import { deleteTodoHandler } from "../handler/deleteTodoHandler";

interface Props {
    id: number;
}

export const TodoDeleteButton: FC<Props> = ({ id }) => {
    return (
        <div className={ styles.wrapper } onClick={() => deleteTodoHandler(id)}>
            <div className={ styles.inner }>
                <TrashIcon />
            </div>
        </div>
    );
}

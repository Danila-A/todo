import type { FC } from "react";
import styles from './TodoDeleteButton.module.scss';
import { useAppDispatch } from "../../../shared/lib";
import { deleteTodo } from "../../../entities/Todo";
import { TrashIcon } from "../../../shared/ui";

interface Props {
    id: number;
}

export const TodoDeleteButton: FC<Props> = ({ id }) => {
    const dispatch = useAppDispatch();

    const deleteTodoHandler = (id: number) => {
        dispatch(deleteTodo({ id }));
    }

    return (
        <div className={ styles.wrapper } onClick={() => deleteTodoHandler(id)}>
            <div className={ styles.inner }>
                <TrashIcon />
            </div>
        </div>
    );
}

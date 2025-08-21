import type { FC } from "react";
import { TrashIcon } from "../../../shared";
import styles from './TodoDeleteButton.module.scss';
import { useAppDispatch } from "../../../shared/lib";
import { deleteTodo } from "../../../entities/Todo";

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

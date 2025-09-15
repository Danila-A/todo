import type { FC } from "react";
import styles from './TodoDeleteButton.module.scss';
import { useAppDispatch } from "../../../shared/lib";
import { deleteTodo, saveTodosToLocalStorage } from "../../../entities/Todo";
import { TrashIcon } from "../../../shared/ui";

interface Props {
    id: number;
}

export const TodoDeleteButton: FC<Props> = ({ id }) => {
    const dispatch = useAppDispatch();

    const deleteTodoHandler = (id: number) => {
        dispatch(deleteTodo({ id }));
        dispatch(saveTodosToLocalStorage());
    }

    return (
        <div 
            className={ styles.trash } 
            onClick={() => deleteTodoHandler(id)}
        >
            <TrashIcon />
        </div>
    );
}

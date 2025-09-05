import type { FC } from "react";
import { useAppDispatch } from "../../../shared/lib";
import { saveTodosToLocalStorage, toggleTodoStatus } from "../../../entities/Todo";
import { Checkbox } from "../../../shared/ui";

interface Props {
    id: number;
    checked: boolean;
}

export const TodoStatusCheckbox: FC<Props> = ({ id, checked }) => {
    const dispatch = useAppDispatch();

    const toggleStatusHandler = (id: number) => {
        dispatch(toggleTodoStatus({ id }));
        dispatch(saveTodosToLocalStorage());
    }

    return (
        <Checkbox
            id={id}
            clickHandler={ () => toggleStatusHandler(id) }
            checked={ checked }
        />
    );
}

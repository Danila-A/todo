import type { FC } from "react";
import { Checkbox } from "../../../shared";
import { useAppDispatch } from "../../../shared/lib";
import { toggleTodoStatus } from "../../../entities/Todo";

interface Props {
    id: number;
    checked: boolean;
}

export const TodoStatusCheckbox: FC<Props> = ({ id, checked }) => {
    const dispatch = useAppDispatch();

    const toggleStatusHandler = (id: number) => {
        dispatch(toggleTodoStatus({ id }));
    }

    return (
        <div>
            <Checkbox 
                clickHandler={ () => toggleStatusHandler(id) }
                checked={ checked }
            />
        </div>
    );
}

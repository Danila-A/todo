import type { FC } from "react";
import { useAppDispatch } from "../../../shared/lib";
import { toggleTodoStatus } from "../../../entities/Todo";
import { Checkbox } from "../../../shared/ui";

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
                id={id}
                clickHandler={ () => toggleStatusHandler(id) }
                checked={ checked }
            />
        </div>
    );
}

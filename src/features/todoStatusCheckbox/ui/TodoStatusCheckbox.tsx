import type { FC } from "react";
import { Checkbox } from "../../../shared";
import { toggleStatusHandler } from "../handler/toggleStatusHandler";

interface Props {
    id: number;
    checked: boolean;
}

export const TodoStatusCheckbox: FC<Props> = ({ id, checked }) => {
    return (
        <div>
            <Checkbox 
                clickHandler={ () => toggleStatusHandler(id) }
                checked={ checked }
            />
        </div>
    );
}

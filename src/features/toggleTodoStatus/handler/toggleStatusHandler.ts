import { useAppDispatch } from "../../../app";
import { toggleTodoStatus } from "../../../entities/Todos";

export function toggleStatusHandler(id: number): void {
    const dispatch = useAppDispatch();
    dispatch(toggleTodoStatus({ id }));
}

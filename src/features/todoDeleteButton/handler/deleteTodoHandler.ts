import { useAppDispatch } from "../../../app";
import { deleteTodo } from "../../../entities/Todos";

export function deleteTodoHandler(id: number): void {
    const dispatch = useAppDispatch();
    dispatch(deleteTodo({ id }));
}

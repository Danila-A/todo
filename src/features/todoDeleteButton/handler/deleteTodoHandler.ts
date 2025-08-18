import { deleteTodo } from "../../../entities/Todos";
import { useAppDispatch } from "../../../shared/lib";

export function deleteTodoHandler(id: number): void {
    const dispatch = useAppDispatch();
    dispatch(deleteTodo({ id }));
}

import { useAppDispatch } from "../../../app";
import { addTodo } from "../../../entities/Todos";

export function addTodoHandler(text:string) {
    const dispatch = useAppDispatch();
    dispatch(addTodo({ text }));
}

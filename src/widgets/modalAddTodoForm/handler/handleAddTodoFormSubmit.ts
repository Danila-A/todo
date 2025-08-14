import type { SubmitHandler } from "react-hook-form";
import { useAppDispatch, type AddTodoFormValue } from "../../../app";
import { addTodo } from "../../../entities/Todos";

export const handleAddTodoFormSubmit: SubmitHandler<AddTodoFormValue> = (data) => {
    if (!data.add.trim()) return;
    useAppDispatch()(addTodo({ text: data.add }));
}

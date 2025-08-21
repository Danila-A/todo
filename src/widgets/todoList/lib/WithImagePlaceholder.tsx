import { selectMemoizedTodos } from "../../../features/searchTodo";
import { useAppSelector } from "../../../shared/lib";
import { EmptyList } from "../ui/EmptyList/EmptyList";
import { TodoList } from "../ui/TodoList/TodoList";

export const WithImagePlaceholder = () => {
    const todos = useAppSelector(selectMemoizedTodos);
    return () => {
        if (!todos) return <EmptyList />
        return <TodoList />
    }
}

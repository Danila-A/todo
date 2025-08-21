import { selectMemoizedTodos } from "../../../features/searchTodo";
import { useAppSelector } from "../../../shared/lib";
import { EmptyList } from "../ui/EmptyList/EmptyList";
import { TodoList } from "../ui/TodoList/TodoList";

export const WithImagePlaceholder = () => {
    return () => {
        const todos = useAppSelector(selectMemoizedTodos);
        
        if (!todos) return <EmptyList />
        return <TodoList />
    }
}

import { EmptyList } from "../../widgets/emptyList";
import { TodoList } from "../../widgets/todoList";
import { useAppSelector } from "../store/hooks"
import { selectMemoizedTodos } from "../store/MemoizedSelectors/selectMemoizedTodos"

export const withImagePlaceholder = () => {
    return function WithImagePlaceholder() {
        const todos = useAppSelector(selectMemoizedTodos);

        if (!todos) return <EmptyList />
        return <TodoList todos={todos} />
    }
}

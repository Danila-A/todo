import { useAppSelector } from "../store/hooks"
import { selectMemoizedTodos } from "../store/MemoizedSelectors/selectMemoizedTodos"

export const withImagePlaceholder = () => {
    return function WithImagePlaceholder() {
        const todos = useAppSelector(selectMemoizedTodos);

        if (!todos) return <div>Nothing</div>
        return <div>Todos list</div>
    }
}

import type { FC } from "react";
import { EmptyList } from "../../widgets/emptyList";
import { useAppSelector } from "../store/hooks"
import { selectMemoizedTodos } from "../store/MemoizedSelectors/selectMemoizedTodos"

export const WithImagePlaceholder = (Component: FC) => {
    return () => {
        const todos = useAppSelector(selectMemoizedTodos);

        if (!todos) return <EmptyList />
        return <Component />
    }
}

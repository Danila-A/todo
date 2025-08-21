import type { FC } from "react";
import { EmptyList } from "../../../widgets/emptyList";
import { selectMemoizedTodos } from "../../../features/searchTodo";
import { useAppSelector } from "../../../shared/lib";

export const WithImagePlaceholder = (Component: FC) => {
    const todos = useAppSelector(selectMemoizedTodos);
    return () => {
        if (!todos) return <EmptyList />
        return <Component />
    }
}

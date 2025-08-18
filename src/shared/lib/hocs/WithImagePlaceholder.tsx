import type { FC } from "react";
import { EmptyList } from "../../../widgets/emptyList";
import { selectMemoizedTodos } from "../../../app";
import { useAppSelector } from "../store/customReduxHooks";

export const WithImagePlaceholder = (Component: FC) => {
    const todos = useAppSelector(selectMemoizedTodos);
    return () => {
        if (!todos) return <EmptyList />
        return <Component />
    }
}

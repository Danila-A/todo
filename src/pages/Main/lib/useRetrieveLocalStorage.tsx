import { retrieveThemeTypeFromLocalStorage } from "../../../entities/Theme";
import { retrieveTodosFromLocalStorage } from "../../../entities/Todo";
import { useAppDispatch } from "../../../shared/lib"

export const useRetrieveLocalStorage = () => {
    const dispatch = useAppDispatch();
    dispatch(retrieveThemeTypeFromLocalStorage());
    dispatch(retrieveTodosFromLocalStorage());
}

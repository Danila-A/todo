import { useAppDispatch } from "../../../app";
import { toggleTheme } from "../../../entities/Themes";

export function toggleThemeHandler() {
    const dispatch = useAppDispatch();
    dispatch(toggleTheme());
}

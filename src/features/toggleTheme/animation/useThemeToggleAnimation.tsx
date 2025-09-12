import { useSpring } from "@react-spring/web"
import { useAppSelector } from "../../../shared/lib"
import { selectTheme } from "../../../entities/Theme"

export const useThemeToggleAnimation = () => {
    const themeType = useAppSelector(selectTheme);
    const animation = {
        from: { opacity: 0 },
        to: { opacity: 1 },
    };

    const lightThemeSprings = useSpring({
        ...animation,
        reverse: themeType === 'dark' ? false : true,
    });

    const darkThemeSprings = useSpring({
        ...animation,
        reverse: themeType === 'light' ? false : true,
    });

    return { lightThemeSprings, darkThemeSprings };
}

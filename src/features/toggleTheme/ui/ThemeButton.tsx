import type { FC } from 'react';
import styles from './ThemeButton.module.scss';
import { useAppDispatch, useAppSelector } from '../../../shared/lib';
import { saveThemeTypeToLocalStorage, selectTheme, toggleTheme } from '../../../entities/Theme';
import { MoonIcon, SunIcon } from '../../../shared/ui';
import { useThemeToggleAnimation } from '../animation/useThemeToggleAnimation';
import { animated } from '@react-spring/web';

export const ThemeButton: FC = () => {
    const themeType = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();
    const { lightThemeSprings, darkThemeSprings } = useThemeToggleAnimation();

    const toggleThemeHandler = () => {
        dispatch(toggleTheme());
        dispatch(saveThemeTypeToLocalStorage());
    }
    
    return (
        <div 
            className={ styles.theme }
            onClick={toggleThemeHandler}    
        >
            <div className={styles.theme__inner }>
                {
                    themeType == 'light' ? 
                    <animated.div style={darkThemeSprings}>
                        <MoonIcon />
                    </animated.div>
                    : 
                    <animated.div style={lightThemeSprings}>
                        <SunIcon />
                    </animated.div>
                }
            </div>
        </div>
    );
}

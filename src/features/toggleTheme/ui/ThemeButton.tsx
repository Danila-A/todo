import type { FC } from 'react';
import styles from './ThemeButton.module.scss';
import { useAppDispatch, useAppSelector } from '../../../shared/lib';
import { saveThemeTypeToLocalStorage, selectTheme, toggleTheme } from '../../../entities/Theme';
import { MoonIcon, SunIcon } from '../../../shared/ui';

export const ThemeButton: FC = () => {
    const themeType = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

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
                {themeType == 'light' ? <MoonIcon /> : <SunIcon />}
            </div>
        </div>
    );
}

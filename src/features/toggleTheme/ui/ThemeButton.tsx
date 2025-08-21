import type { FC } from 'react';
import styles from './ThemeButton.module.scss';
import { selectMemoizedTheme, useAppSelector } from '../../../app';
import { MoonIcon } from '../../../shared';
import { SunIcon } from '../../../shared/ui/SunIcon/SunIcon';
import { useAppDispatch } from '../../../shared/lib';
import { toggleTheme } from '../../../entities/Theme';

export const ThemeButton: FC = () => {
    const themeType = useAppSelector(selectMemoizedTheme);
    const dispatch = useAppDispatch();

    const toggleThemeHandler = () => {
        dispatch(toggleTheme());
    }
    
    return (
        <div 
            className={ styles.wrapper }
            onClick={toggleThemeHandler}    
        >
            <div className={styles.inner }>
                {themeType == 'light' ? <MoonIcon /> : <SunIcon />}
            </div>
        </div>
    );
}

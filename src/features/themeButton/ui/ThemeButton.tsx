import type { FC } from 'react';
import styles from './ThemeButton.module.scss';
import { useAppSelector } from '../../../app';
import { selectMemoizedTheme } from '../../../entities/Themes';
import { MoonIcon } from '../../../shared';
import { SunIcon } from '../../../shared/ui/SunIcon/SunIcon';
import { toggleThemeHandler } from '../handler/toggleThemeHandler';

export const ThemeButton: FC = () => {
    const themeType = useAppSelector(selectMemoizedTheme);
    
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

import type { FC } from 'react';
import styles from './Header.module.scss';
import { Title } from '../../../shared/ui';
import { contentData } from '../../../shared/staticContent';
import { useAppSelector } from '../../../shared/lib';
import { selectTheme } from '../../../entities/Theme';
import { SearchForm } from '../../../features/searchTodo';
import { FiltersButton } from '../../../features/changeFilter';
import { ThemeButton } from '../../../features/toggleTheme';
import utils from '../../../app/styles/utils.module.scss';

export const Header: FC = () => {
    const themeType = useAppSelector(selectTheme);

    return (
        <header className={styles.header}>
            <div className={`${styles.header__inner} ${utils.container}`}>
                
                <div className={styles.header__title}>
                    <Title
                        text={contentData.title}
                        themeType={themeType}
                    />
                </div>
                <div className={styles.header__control}>
                    <SearchForm />

                    <div className={styles.header__buttons}>
                        <FiltersButton />
                        <ThemeButton />
                    </div>
                </div>
                
            </div>
        </header>
    ); 
}

import type { FC } from 'react';
import styles from './Header.module.scss';
import { Title } from '../../../shared/ui';
import { contentData } from '../../../shared/staticContent';
import { useAppSelector } from '../../../shared/lib';
import { selectMemoizedTheme } from '../../../entities/Theme';
import { SearchForm } from '../../../features/searchTodo';
import { FiltersButton } from '../../../features/changeFilter';
import { ThemeButton } from '../../../features/toggleTheme';

export const Header: FC = () => {
    const themeType = useAppSelector(selectMemoizedTheme);

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <Title
                    text={contentData.title}
                    themeType={themeType}
                />
            </div>
            <div className={styles.controlGroup}>
                <div className={`${styles.controlGroup__block} ${styles.searchBlock}`}>
                    <SearchForm />
                </div>
                <div className={styles.controlGroup__block}>
                    <FiltersButton />
                </div>
                <div className={styles.controlGroup__block}>
                    <ThemeButton />
                </div>
            </div>
        </header>
    ); 
}

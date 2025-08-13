import type { FC } from 'react';
import styles from './Header.module.scss';
import { Title } from '../../../shared';
import { contentData } from '../../../app';
import { SearchForm } from '../../../features/searchForm/ui/SearchForm';
import { FiltersButton } from '../../../features/filtersButton';
import { ThemeButton } from '../../../features/themeButton';

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <Title
                    text={contentData.title}
                />
            </div>
            <div className={styles.controlGroup}>
                <div className={styles.searchBlock}>
                    <SearchForm />
                </div>
                <div>
                    <FiltersButton />
                </div>
                <div>
                    <ThemeButton />
                </div>
            </div>
        </header>
    ); 
}

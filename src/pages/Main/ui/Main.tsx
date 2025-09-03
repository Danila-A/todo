import type { FC } from 'react';
import styles from './Main.module.scss';
import { Header } from '../../../widgets/header';
import { TodoListWithImagePlaceholder } from '../../../widgets/todoList';
import { AddTodoForm } from '../../../widgets/addTodoForm';
import { useAppSelector } from '../../../shared/lib';
import { selectTheme } from '../../../entities/Theme';

export const Main: FC = () => {
    const themeType = useAppSelector(selectTheme);
    const themeClass = themeType == 'dark' ? styles.page_dark : styles.page_light;

    return (
        <div className={`${styles.page} ${themeClass}`}>
            <Header/>
            <TodoListWithImagePlaceholder />
            <AddTodoForm />
        </div>
    );
}

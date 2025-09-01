import type { FC } from 'react';
import styles from './Main.module.scss';
import { Header } from '../../../widgets/header';
import { TodoListWithImagePlaceholder } from '../../../widgets/todoList';
import { AddTodoForm } from '../../../widgets/addTodoForm';
import { useAppSelector } from '../../../shared/lib';
import { selectMemoizedTheme } from '../../../entities/Theme';

export const Main: FC = () => {
    const themeType = useAppSelector(selectMemoizedTheme);
    const themeClass = themeType == 'dark' ? styles.wrapper__dark : styles.wrapper__light;

    return (
        <div className={`${styles.wrapper} ${themeClass}`}>
            <Header/>
            <TodoListWithImagePlaceholder />
            <AddTodoForm />
        </div>
    );
}

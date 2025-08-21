import type { FC } from 'react';
import styles from './Main.module.scss';
import { Header } from '../../../widgets/header';
import { TodoListWithImagePlaceholder } from '../../../widgets/todoList';
import { AddTodoForm } from '../../../widgets/addTodoForm';

export const Main: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <TodoListWithImagePlaceholder />
            <AddTodoForm />
        </div>
    );
}

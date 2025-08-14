import type { FC } from 'react';
import styles from './Main.module.scss';
import { Header } from '../../widgets/header';
import { selectMemoizedTodos, useAppSelector } from '../../app';
import { TodoListWithImagePlaceholder } from '../../widgets/todoList';
import { ModalAddTodoForm } from '../../widgets/modalAddTodoForm';

export const Main: FC = () => {
    const todos = useAppSelector(selectMemoizedTodos);

    return (
        <div className={styles.wrapper}>
            <Header/>
            <TodoListWithImagePlaceholder todos={todos} />
            <ModalAddTodoForm />
        </div>
    );
}

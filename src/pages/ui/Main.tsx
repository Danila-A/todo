import type { FC } from 'react';
import styles from './Main.module.scss';
import { Header } from '../../widgets/header';
import { TodoListWithImagePlaceholder } from '../../widgets/todoList';
import { ModalAddTodoForm } from '../../widgets/modalAddTodoForm';

export const Main: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <TodoListWithImagePlaceholder />
            <ModalAddTodoForm />
        </div>
    );
}

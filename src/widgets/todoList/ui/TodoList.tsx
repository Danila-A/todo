import type { FC } from "react";
import { Checkbox } from "../../../shared";
import { TodoItemText } from "../../../entities/Todos";
import { TodoDeleteButton } from "../../../features/todoDeleteButton";
import { deleteTodoHandler } from "../../../features/todoDeleteButton/handler/deleteTodoHandler";
import { ModalOpenButton } from "../../../features/modalOpenButton";
import styles from './TodoList.module.scss';
import { selectMemoizedTodos, useAppSelector, WithImagePlaceholder } from "../../../app";

const TodoList: FC = () => {
    const todos = useAppSelector(selectMemoizedTodos);

    return (
        <main className={styles.main}>
            <div className={styles.main__inner}>

                {todos?.map((item) => (
                    <div key={item.id} className={styles.listItem}>
                        <div className={styles.listItem__inner}>

                            <div className={styles.listItem__checkbox}>
                                <Checkbox 
                                    clickHandler={deleteTodoHandler} 
                                    checked={item.status}
                                    id={item.id}
                                />
                            </div>
                            <div>
                                <TodoItemText text={item.text} />    
                            </div>
                            <div className={styles.listItem__deleteButton}>
                                <TodoDeleteButton id={item.id} />
                            </div>

                        </div>
                    </div>
                ))}

                <div className={styles.main__modalOpenButton}>
                    <ModalOpenButton />
                </div>
            </div>
        </main>
    );
}

export const TodoListWithImagePlaceholder = WithImagePlaceholder(TodoList);

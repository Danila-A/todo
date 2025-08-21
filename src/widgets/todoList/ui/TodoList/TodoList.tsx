import type { FC } from "react";
import styles from './TodoList.module.scss';
import { useAppSelector } from "../../../../shared/lib";
import { selectMemoizedTodos } from "../../../../features/searchTodo";
import { TodoStatusCheckbox } from "../../../../features/toggleTodoStatus";
import { TodoText } from "../../../../entities/Todo";
import { TodoDeleteButton } from "../../../../features/deleteTodo";
import { ModalOpenButton } from "../../../../shared/ui";
import { WithImagePlaceholder } from "../../lib/WithImagePlaceholder";

export const TodoList: FC = () => {
    const todos = useAppSelector(selectMemoizedTodos);

    return (
        <main className={styles.main}>
            <div className={styles.main__inner}>

                {todos?.map((item) => (
                    <div key={item.id} className={styles.listItem}>
                        <div className={styles.listItem__inner}>

                            <div className={styles.listItem__checkbox}>
                                <TodoStatusCheckbox
                                    checked={item.status}
                                    id={item.id}
                                />
                            </div>
                            <div>
                                <TodoText text={item.text} />    
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

export const TodoListWithImagePlaceholder = WithImagePlaceholder();

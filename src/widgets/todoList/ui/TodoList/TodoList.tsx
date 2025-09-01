import type { FC } from "react";
import styles from './TodoList.module.scss';
import { useAppSelector } from "../../../../shared/lib";
import { selectMemoizedTodos } from "../../../../features/searchTodo";
import { TodoStatusCheckbox } from "../../../../features/toggleTodoStatus";
import { TodoText } from "../../../../entities/Todo";
import { TodoDeleteButton } from "../../../../features/deleteTodo";
import { ModalOpenButton } from "../../../../shared/ui";
import { WithImagePlaceholder } from "../../lib/WithImagePlaceholder";
import { selectTheme } from "../../../../entities/Theme";

export const TodoList: FC = () => {
    const todos = useAppSelector(selectMemoizedTodos);
    const themeType = useAppSelector(selectTheme);

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
                                <TodoText 
                                    text={item.text}
                                    checked={item.status}
                                    themeType={themeType}
                                />
                            </div>
                            <div className={styles.listItem__deleteButton}>
                                <TodoDeleteButton id={item.id} />
                            </div>

                        </div>
                    </div>
                ))}
                
            </div>
            <div className={styles.main__modalOpenButton}>
                <ModalOpenButton />
            </div>
        </main>
    );
}

export const TodoListWithImagePlaceholder = WithImagePlaceholder();

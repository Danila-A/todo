import type { FC } from "react";
import styles from './TodoList.module.scss';
import utils from '../../../../app/styles/utils.module.scss';
import { useAppSelector } from "../../../../shared/lib";
import { selectMemoizedTodos } from "../../../../features/searchTodo";
import { TodoStatusCheckbox } from "../../../../features/toggleTodoStatus";
import { TodoText } from "../../../../entities/Todo";
import { TodoDeleteButton } from "../../../../features/deleteTodo";
import { ModalOpenButton } from "../../../../shared/ui";
import { WithImagePlaceholder } from "../../lib/WithImagePlaceholder";
import { selectTheme } from "../../../../entities/Theme";
import { useAddButtonPosition } from "../../lib/buttonPosition/useAddButtonPosition";

export const TodoList: FC = () => {
    const todos = useAppSelector(selectMemoizedTodos);
    const themeType = useAppSelector(selectTheme);
    const addButtonStyles = useAddButtonPosition();

    return (
        <main className={styles.main}>
            <div className={`${styles.main__inner} ${utils.container}`}>

                {todos?.map((item) => (
                    <div key={item.id} className={styles.todo}>
                        <div className={styles.todo__inner}>

                            <div className={styles.todo__checkbox}>
                                <TodoStatusCheckbox
                                    checked={item.status}
                                    id={item.id}
                                />
                            </div>
                            <TodoText 
                                text={item.text}
                                checked={item.status}
                                themeType={themeType}
                            />
                            <div className={styles.todo__delete_button}>
                                <TodoDeleteButton id={item.id} />
                            </div>

                        </div>
                    </div>
                ))}
                
            </div>
            <div 
                className={styles.main__modal_open_button}
                style={addButtonStyles}
            >
                <ModalOpenButton />
            </div>
        </main>
    );
}

export const TodoListWithImagePlaceholder = WithImagePlaceholder();

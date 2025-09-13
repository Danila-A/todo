import type { FC } from "react";
import styles from './TodoList.module.scss';
import utils from '../../../../app/styles/utils.module.scss';
import { useAppSelector } from "../../../../shared/lib";
import { TodoStatusCheckbox } from "../../../../features/toggleTodoStatus";
import { TodoText } from "../../../../entities/Todo";
import { TodoDeleteButton } from "../../../../features/deleteTodo";
import { ModalOpenButton } from "../../../../shared/ui";
import { WithImagePlaceholder } from "../../lib/WithImagePlaceholder";
import { selectTheme } from "../../../../entities/Theme";
import { useAddButtonPosition } from "../../lib/buttonPosition/useAddButtonPosition";
import { animated } from "@react-spring/web";
import { useListAnimation } from "../../lib/animation/useListAnimation";

export const TodoList: FC<{ todos:TodoItem[] }> = ({ todos }) => {
    const themeType = useAppSelector(selectTheme);
    const addButtonStyles = useAddButtonPosition();
    const transitions = useListAnimation(todos);

    return (
        <main className={styles.main}>
            <div className={`${styles.main__inner} ${utils.container}`}>

                {transitions((style, item) => (
                    <animated.div 
                        className={styles.todo}
                        style={style}
                    >
                        <div className={styles.todo__inner}>

                            <div className={styles.todo__checkbox}>
                                <TodoStatusCheckbox
                                    checked={item.status}
                                    id={item.id}
                                />
                            </div>
                            <div className={styles.todo__text}>
                                <TodoText 
                                    text={item.text}
                                    checked={item.status}
                                    themeType={themeType}
                                />
                            </div>
                            <div className={styles.todo__delete_button}>
                                <TodoDeleteButton id={item.id} />
                            </div>

                        </div>
                    </animated.div>
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

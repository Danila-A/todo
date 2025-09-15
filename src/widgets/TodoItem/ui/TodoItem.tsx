import { useState, type FC } from 'react';
import styles from './TodoItem.module.scss';
import { TodoStatusCheckbox } from '../../../features/toggleTodoStatus';
import { TodoText } from '../../../entities/Todo';
import { TodoDeleteButton } from '../../../features/deleteTodo';
import type { SpringValue } from '@react-spring/web';
import { animated } from '@react-spring/web';
import { EditButton } from '../../../shared/ui';
import { EditTodoForm } from '../../../features/editTodo';

interface Props {
    style: {
        opacity: SpringValue<number>;
        scale: SpringValue<number>;
    }
    item: TodoItem;
    themeType: ThemeType;
}

export const TodoItem: FC<Props> = ({ style, item, themeType }) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const todoInnerClasses = isEditMode ? styles.todo__inner : `${styles.todo__inner} ${styles.todo__inner_padding_right}`;

    return (
        <animated.div 
            className={styles.todo}
            style={style}
        >
            <div className={todoInnerClasses}>

                <div className={styles.todo__checkbox}>
                    <TodoStatusCheckbox
                        checked={item.status}
                        id={item.id}
                    />
                </div>
                {
                    isEditMode ? 
                        <EditTodoForm
                            id={item.id}
                            todoText={item.text}
                            setIsEditMode={setIsEditMode} 
                        />
                    :
                        <>
                            <div className={styles.todo__text}>
                                <TodoText
                                    text={item.text}
                                    checked={item.status}
                                    themeType={themeType}
                                />
                            </div>
                            <div className={styles.todo__buttons_group}>
                                <EditButton handleClick={() => setIsEditMode(true)} />
                                <TodoDeleteButton id={item.id} />
                            </div>
                        </>
                }

            </div>
        </animated.div>
    );
}

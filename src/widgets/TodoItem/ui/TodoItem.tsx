import type { FC } from 'react';
import styles from './TodoItem.module.scss';
import { TodoStatusCheckbox } from '../../../features/toggleTodoStatus';
import { TodoText } from '../../../entities/Todo';
import { TodoDeleteButton } from '../../../features/deleteTodo';
import type { SpringValue } from '@react-spring/web';
import { animated } from '@react-spring/web';

interface Props {
    style: {
        opacity: SpringValue<number>;
        scale: SpringValue<number>;
    }
    item: TodoItem;
    themeType: ThemeType;
}

export const TodoItem: FC<Props> = ({ style, item, themeType }) => {
    return (
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
    );
}

import type { FC } from "react";
import styles from './TodoList.module.scss';
import utils from '../../../../app/styles/utils.module.scss';
import { useAppSelector } from "../../../../shared/lib";
import { ModalOpenButton } from "../../../../shared/ui";
import { WithImagePlaceholder } from "../../lib/WithImagePlaceholder";
import { selectTheme } from "../../../../entities/Theme";
import { useAddButtonPosition } from "../../lib/buttonPosition/useAddButtonPosition";
import { useListAnimation } from "../../lib/animation/useListAnimation";
import { TodoItem } from "../../../../widgets/TodoItem";

export const TodoList: FC<{ todos:TodoItem[] }> = ({ todos }) => {
    const themeType = useAppSelector(selectTheme);
    const addButtonStyles = useAddButtonPosition();
    const transitions = useListAnimation(todos);

    return (
        <main className={styles.main}>
            <div className={`${styles.main__inner} ${utils.container}`}>

                {transitions((style, item) => (
                    <TodoItem
                        style={style}
                        item={item}
                        themeType={themeType}
                    />
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

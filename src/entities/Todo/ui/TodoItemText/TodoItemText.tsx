import type { FC } from 'react';
import styles from './TodoItemText.module.scss';

interface Props {
    text: string;
}

export const TodoItemText: FC<Props> = ({ text }) => {
    return (
        <div>
            <span className={ styles.text }>{ text }</span>
        </div>
    );
}

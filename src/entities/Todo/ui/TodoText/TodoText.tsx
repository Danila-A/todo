import type { FC } from 'react';
import styles from './TodoText.module.scss';

interface Props {
    text: string;
}

export const TodoText: FC<Props> = ({ text }) => {
    return (
        <div>
            <span className={ styles.text }>{ text }</span>
        </div>
    );
}

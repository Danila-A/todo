import type { FC } from 'react';
import styles from './TodoText.module.scss';

interface Props {
    text: string;
    checked: boolean;
    themeType: ThemeType;
}

export const TodoText: FC<Props> = ({ text, checked, themeType }) => {
    const checkClass = checked ? styles.text__checked : null;
    const themeClass = themeType == 'dark' ? styles.text__dark : styles.text__light;

    return (
        <div>
            <span className={ `${styles.text} ${checkClass} ${themeClass}` }>
                { text }
            </span>
        </div>
    );
}

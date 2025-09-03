import type { FC } from 'react';
import styles from './TodoText.module.scss';

interface Props {
    text: string;
    checked: boolean;
    themeType: ThemeType;
}

export const TodoText: FC<Props> = ({ text, checked, themeType }) => {
    const checkedClass = checked ? styles.text_checked : null;
    const themeClass = themeType == 'dark' ? styles.text_dark : styles.text_light;

    return (
        <p className={ `${styles.text} ${checkedClass} ${themeClass}` }>
            { text }
        </p>
    );
}

import type { FC } from "react";
import styles from './Title.module.scss';

interface Props {
    text: string;
    themeType: ThemeType;
}

export const Title: FC<Props> = ({ text, themeType }) => {
    const themeClass = themeType == 'light' ? styles.title_light : styles.title_dark;

    return (
        <h3 className={ `${styles.title} ${themeClass}` } >
            { text }
        </h3>
    );
}

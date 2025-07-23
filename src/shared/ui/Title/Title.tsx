import type { FC } from "react";
import type { ThemeType } from "../../../entities/Themes";
import styles from './Title.module.scss';

interface Props {
    themeType: ThemeType;
    text: string;
}

export const Title: FC<Props> = ({ themeType, text }) => {
    const themeClass = themeType == 'light' ? styles.title_light : styles.title_dark;

    return (
        <div>
            <span className={ `${styles.title} ${themeClass}` } >
                { text }
            </span>
        </div>
    );
}

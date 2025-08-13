import type { FC } from "react";
import styles from './Title.module.scss';
import { selectMemoizedTheme, useAppSelector } from "../../../app";

interface Props {
    text: string;
}

export const Title: FC<Props> = ({ text }) => {
    const themeType = useAppSelector(selectMemoizedTheme);
    const themeClass = themeType == 'light' ? styles.title_light : styles.title_dark;

    return (
        <div>
            <span className={ `${styles.title} ${themeClass}` } >
                { text }
            </span>
        </div>
    );
}

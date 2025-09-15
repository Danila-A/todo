import type { FC, ReactNode } from "react";
import styles from './PageWrapper.module.scss';
import { useAppSelector } from "../../../shared/lib";
import { selectTheme } from "../../../entities/Theme";

interface Props {
    children: ReactNode;
}

export const PageWrapper: FC<Props> = ({ children }) => {
    const themeType = useAppSelector(selectTheme);
    const themeClass = themeType == 'dark' ? styles.page_dark : styles.page_light;

    return (
        <div className={`${styles.page} ${themeClass}`}>
            {children}
        </div>
    );
}

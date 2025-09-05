import type { FC, ReactNode } from 'react';
import styles from './Modal.module.scss';

interface Props {
    children: ReactNode;
    themeType: ThemeType;
}

export const Modal: FC<Props> = ({ children, themeType }) => {
    const themeClass = themeType == 'dark' ? styles.modal_dark : styles.modal_light;

    return (
        <dialog
            id='modal'
            className={`${styles.modal} ${themeClass}`}
        >
            { children }
        </dialog>
    );
}

import type { FC, ReactNode } from 'react';
import styles from './Modal.module.scss';
import { useModal } from '../../lib/handlers/useModal';

interface Props {
    children: ReactNode;
    themeType: ThemeType;
}

export const Modal: FC<Props> = ({ children, themeType }) => {
    useModal();
    const themeClass = themeType == 'dark' ? styles.modal_dark : styles.modal_light;

    return (
        <dialog
            id='modal'
            className={`${styles.modal} ${themeClass}`}
        >
            <div className={styles.modal__inner}>
                { children }
            </div>
        </dialog>
    );
}

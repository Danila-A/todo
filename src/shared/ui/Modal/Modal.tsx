import type { FC, ReactNode } from 'react';
import styles from './Modal.module.scss';

interface Props {
    children: ReactNode;
}

export const Modal: FC<Props> = ({ children }) => {
    return (
        <dialog
            id='modal'
            className={ styles.modal }
        >
            { children }
        </dialog>
    );
}

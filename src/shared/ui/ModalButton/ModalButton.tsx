import type { FC } from "react";
import styles from './ModalButton.module.scss';

interface Props {
    buttonType: 'cancel' | 'apply';
    text: string;
}

export const ModalButton: FC<Props> = ({ buttonType, text }) => {
    const buttonTypeClass = buttonType == 'cancel' ? styles.modalButton_cancel : styles.modalButton_apply;
    
    return (
        <button className={`${styles.modalButton} ${buttonTypeClass}`} >
            { text }
        </button>
    );
}

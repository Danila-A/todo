import type { FC } from 'react';
import styles from './ModalOpenButton.module.scss';
import { PlusIcon } from '../PlusIcon/PlusIcon';

export const ModalOpenButton: FC = () => {

    const openModalHandler = () => {
        (document.getElementById('modal') as HTMLDialogElement).showModal();
        (document.querySelector('body') as HTMLBodyElement)?.classList.add('no-scroll');
    }

    return (
        <div
            className={ styles.wrapper }
            onClick={ openModalHandler }
        >
            <PlusIcon />
        </div>
    );
}

import type { FC } from 'react';
import styles from './ModalOpenButton.module.scss';
import { PlusIcon } from '../PlusIcon/PlusIcon';
import { useAppDispatch } from '../../lib';
import { changeModalOpenStatus } from '../../model';

export const ModalOpenButton: FC = () => {
    const dispatch = useAppDispatch();

    const openModalHandler = () => {
        (document.getElementById('modal') as HTMLDialogElement).showModal();
        (document.querySelector('body') as HTMLBodyElement)?.classList.add('no-scroll');
        dispatch(changeModalOpenStatus({ open: true }));
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

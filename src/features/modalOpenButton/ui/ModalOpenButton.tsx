import type { FC } from 'react';
import styles from './ModalOpenButton.module.scss';
import { openModalHandler } from '../handler/openModalHandler';
import { PlusIcon } from '../../../shared';

export const ModalOpenButton: FC = () => {
    return (
        <div
            className={ styles.wrapper }    
            onClick={ openModalHandler }
        >
            <PlusIcon />
        </div>
    );
}

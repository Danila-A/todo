import type { FC } from 'react';
import styles from './ModalOpenButton.module.scss';
import { openModalHandler } from '../../handlers/openModalHandler';
import { PlusIcon } from '../PlusIcon/PlusIcon';

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

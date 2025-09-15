import type { FC } from 'react';
import styles from './ResolveEditButton.module.scss';
import { CheckMark } from '../CheckMark/CheckMark';

export const ResolveEditButton: FC = () => {

    return (
        <button
            className={styles.button}
            type='submit'
        >
            <CheckMark type={'confirm'} />
        </button>
    );
}

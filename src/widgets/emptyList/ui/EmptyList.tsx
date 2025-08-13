import type { FC } from 'react';
import styles from './EmptyList.module.scss';
import { EmptyImage } from '../../../entities/Todos';
import { contentData } from '../../../app';

export const EmptyList: FC = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main__inner}>
                <EmptyImage text={contentData.emptyImageText} />
            </div>
        </main>
    );
}

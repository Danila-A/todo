import type { FC } from 'react';
import styles from './EmptyList.module.scss';
import { EmptyImage } from '../../../shared/ui';
import { contentData } from '../../../shared/staticContent';

export const EmptyList: FC = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main__inner}>
                <EmptyImage text={contentData.emptyImageText} />
            </div>
        </main>
    );
}

import type { FC } from 'react';
import styles from './EmptyList.module.scss';
import { EmptyImage, ModalOpenButton } from '../../../../shared/ui';
import { contentData } from '../../../../shared/staticContent';
import { useAppSelector } from '../../../../shared/lib';
import { selectTheme } from '../../../../entities/Theme';

export const EmptyList: FC = () => {
    const themeType = useAppSelector(selectTheme);

    return (
        <main className={styles.main}>
            <div className={styles.main__inner}>
                <EmptyImage 
                    text={contentData.emptyImageText} 
                    themeType={themeType}
                />
                <div className={styles.main__modalOpenButton}>
                    <ModalOpenButton />
                </div>
            </div>
        </main>
    );
}

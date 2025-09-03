import type { FC } from 'react';
import styles from './EmptyList.module.scss';
import utils from '../../../../app/styles/utils.module.scss';
import { EmptyImage, ModalOpenButton } from '../../../../shared/ui';
import { contentData } from '../../../../shared/staticContent';
import { useAppSelector } from '../../../../shared/lib';
import { selectTheme } from '../../../../entities/Theme';

export const EmptyList: FC = () => {
    const themeType = useAppSelector(selectTheme);

    return (
        <main className={styles.main}>
            <div className={`${styles.main__inner} ${utils.container}`}>
                <EmptyImage 
                    text={contentData.emptyImageText} 
                    themeType={themeType}
                />
                <div className={styles.main__modal_open_button}>
                    <ModalOpenButton />
                </div>
            </div>
        </main>
    );
}

import type { FC } from 'react';
import styles from './EmptyImage.module.scss';
import { LightDetective } from '../LightDetective/LightDetective';
import { DarkDetective } from '../DarkDetective/DarkDetective';
interface Props {
    text: string;
    themeType: ThemeType;
}

export const EmptyImage: FC<Props> = ({ text, themeType }) => {
    const captionThemeClass = themeType == 'dark' ? styles.caption__dark : styles.caption__light;

    return (
        <figure>
            <div className={styles.imageBlock}>
                {
                    themeType == 'dark' ? 
                    <DarkDetective />
                    : 
                    <LightDetective />
                }
            </div>
            <figcaption className={ `${styles.caption} ${captionThemeClass}` }>{ text }</figcaption>
        </figure>
    );
}

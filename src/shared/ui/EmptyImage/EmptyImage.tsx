import type { FC } from 'react';
import styles from './EmptyImage.module.scss';
import { Image } from '../Image/Image';
import detectiveLight from '../../assets/detective_light.svg';
import detectiveDark from '../../assets/detective_dark.svg';
interface Props {
    text: string;
    themeType: ThemeType;
}

export const EmptyImage: FC<Props> = ({ text, themeType }) => {
    const imagePath = themeType == 'dark' ? detectiveDark : detectiveLight;
    const captionThemeClass = themeType == 'dark' ? styles.caption__dark : styles.caption__light;

    return (
        <figure>
            <div className={styles.imageBlock}>
                <Image imagePath={imagePath} />
            </div>
            <figcaption className={ `${styles.caption} ${captionThemeClass}` }>{ text }</figcaption>
        </figure>
    );
}

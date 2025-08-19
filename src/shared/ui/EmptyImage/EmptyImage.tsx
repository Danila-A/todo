import type { FC } from 'react';
import { Image } from '../../../../shared';
import styles from './EmptyImage.module.scss';

interface Props {
    text: string;
}

export const EmptyImage: FC<Props> = ({ text }) => {
    return (
        <figure>
            <div className={ styles.imageBlock }>
                <Image />
            </div>
            <figcaption className={ styles.caption }>{ text }</figcaption>
        </figure>
    );
}

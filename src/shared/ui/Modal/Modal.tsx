import type { FC, ReactNode } from 'react';
import styles from './Modal.module.scss';
import { useModal } from '../../lib/handlers/useModal';
import { animated } from '@react-spring/web';
import { useAnimatedModal } from '../../lib/modalAnimation/useAnimatedModal';

interface Props {
    children: ReactNode;
    themeType: ThemeType;
}

export const Modal: FC<Props> = ({ children, themeType }) => {
    const { springs, isOpen } = useAnimatedModal();
    useModal();
    
    const themeClass = themeType == 'dark' ? styles.modal_dark : styles.modal_light;

    return (
        <animated.dialog
            id='modal'
            className={`${styles.modal} ${themeClass}`}
            style={springs}
            open={isOpen}
        >
            <div className={styles.modal__inner}>
                { children }
            </div>
        </animated.dialog>
    );
}

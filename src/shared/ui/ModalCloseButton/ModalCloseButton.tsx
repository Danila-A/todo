import type { FC } from "react";
import { ModalButton } from "../ModalButton/ModalButton";

export const ModalCloseButton: FC = () => {
    const handleSubmit = () => {
        (document.querySelector('body') as HTMLBodyElement)?.classList.remove('no-scroll');
    }

    return (
        <div>
            <form method='dialog' onSubmit={handleSubmit}>
                <ModalButton
                    buttonType={'cancel'}
                    text={'cancel'}
                />
            </form>
        </div>
    );
}

import type { FC } from "react";
import { ModalButton } from "../../../shared";

export const ModalCloseButton: FC = () => {
    return (
        <div>
            <form method='dialog'>
                <ModalButton
                    buttonType={'cancel'}
                    text={'cancel'}
                />
            </form>
        </div>
    );
}

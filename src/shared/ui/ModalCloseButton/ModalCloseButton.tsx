import type { FC } from "react";
import { ModalButton } from "../ModalButton/ModalButton";
import { closeModal, useAppDispatch } from "../../lib";

export const ModalCloseButton: FC = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => closeModal(dispatch);

    return (
        <div onClick={handleClick}>
            <ModalButton
                buttonType={'cancel'}
                text={'cancel'}
            />
        </div>
    );
}

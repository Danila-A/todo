import type { FC, FormEvent } from "react";
import { ModalButton } from "../ModalButton/ModalButton";
import { useAppDispatch } from "../../lib";
import { changeModalOpenStatus } from "../../model";

export const ModalCloseButton: FC = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        
        dispatch(changeModalOpenStatus({ open: false }));
        (document.querySelector('#modal') as HTMLDialogElement).close();
        (document.querySelector('body') as HTMLBodyElement)?.classList.remove('no-scroll');
    }

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <ModalButton
                    buttonType={'cancel'}
                    text={'cancel'}
                />
            </form>
        </div>
    );
}

import { useEffect } from "react";
import { closeModal } from "../modalAnimation/closeModal.tsx";
import { useAppDispatch } from "../store/customReduxHooks.ts";

export const useModalOutsideClick = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const modal = document.querySelector('#modal') as HTMLDialogElement;

        const clickHandler = (event: MouseEvent) => {
            if (modal.open) {
                /*
                    event.target выдаёт внутренние элементы dialog при нажатии на него.
                    Внешняя часть также является частью dialog и при нажатии на неё event.target
                    выдаёт dialog
                */
                if (event.target === modal) {
                    closeModal(dispatch);
                }
            }
        }

        modal.addEventListener('click', clickHandler);

        return () => modal.removeEventListener('click', clickHandler);
    }, []);
}

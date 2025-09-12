import { useEffect } from "react";
import { useAppDispatch } from "../store/customReduxHooks";
import { changeModalOpenStatus } from "../../model";

export const useModal = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const modal = document.querySelector('#modal') as HTMLDialogElement;

        const clickHandler = (event: MouseEvent) => {
            if (modal.open) {
                // event.target выдаёт внутренние элементы dialog при нажатии на него.
                // Внешняя часть также является частью dialog и при нажатии на неё event.target
                // выдаёт dialog
                if (event.target === modal) {
                    dispatch(changeModalOpenStatus({ open: false }));
                    modal.close();
                    (document.querySelector('body') as HTMLBodyElement)?.classList.remove('no-scroll');
                }
            }
        }

        modal.addEventListener('click', clickHandler);

        return () => {
            modal.removeEventListener('click', clickHandler);
        }
    }, []);
}

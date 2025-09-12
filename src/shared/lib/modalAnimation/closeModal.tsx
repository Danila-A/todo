import type { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { changeModalOpenStatus } from "../../model";

export const closeModal = (dispatch: ThunkDispatch<RootState, undefined, UnknownAction>) => {
    dispatch(changeModalOpenStatus({ open: false }));

    /*
        При закрытии элемента dialog он сразу удаляется из DOM и анимация 
        проигрывается к уже удалённому элементу. Чтобы dialog удалился после 
        анимации я помещаю закрытие этого элемента в setTimeout, на определённый
        промежуток времени.
    */
    setTimeout(() => {
        (document.querySelector('#modal') as HTMLDialogElement).close();
        (document.querySelector('body') as HTMLBodyElement)?.classList.remove('no-scroll');
    }, 200);
}

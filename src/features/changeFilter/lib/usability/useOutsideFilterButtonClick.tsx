import { useEffect } from "react";

export const useOutsideFilterButtonClick = (
    isOpenRef: React.RefObject<boolean>,
    closeByOutsideClick: () => void,
    rotateAnimatingArrow: () => void
) => {
    useEffect(() => {
        const filterButton = document.querySelector('#filterButton') as HTMLDivElement;

        const clickHandler = (event: MouseEvent) => {
            const eventTarget = event.target as HTMLDivElement;
            
            if (isOpenRef.current) {
                if (eventTarget?.closest('#filterButton') !== filterButton) {
                    closeByOutsideClick();
                    rotateAnimatingArrow();
                }
            }
        }

        document.addEventListener('click', clickHandler);

        return () => {
            document.removeEventListener('click', clickHandler);
        }
    }, [isOpenRef.current]);
}

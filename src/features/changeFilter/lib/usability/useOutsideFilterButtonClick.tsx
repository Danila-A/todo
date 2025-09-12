import { useEffect } from "react";

export const useOutsideFilterButtonClick = (
    isVisible: boolean, 
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
    useEffect(() => {
        const filterButton = document.querySelector('#filterButton') as HTMLDivElement;

        const clickHandler = (event: MouseEvent) => {
            const eventTarget = event.target as HTMLDivElement;
            
            if (isVisible) {
                if (eventTarget?.closest('#filterButton') !== filterButton) {
                    setIsVisible(false);
                }
            }
        }

        document.addEventListener('click', clickHandler);

        return () => {
            document.removeEventListener('click', clickHandler);
        }
    }, [isVisible]);
}

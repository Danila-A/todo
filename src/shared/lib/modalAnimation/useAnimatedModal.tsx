import { useSpring } from "@react-spring/web";
import { selectModalOpenStatus } from "../../model"
import { useAppSelector } from "../store/customReduxHooks"
import { useEffect } from "react";

export const useAnimatedModal = () => {
    const isOpen = useAppSelector(selectModalOpenStatus);

    const [springs, api] = useSpring(() => ({
        opacity: 0,
        scale: 0.9,
    }));

    useEffect(() => {
        if (isOpen) {
            api.start({
                opacity: 1,
                scale: 1,
            });
        } else {
            api.start({
                opacity: 0,
                scale: 0.9,
            });
        }
    }, [isOpen]);

    return { springs, isOpen };
}

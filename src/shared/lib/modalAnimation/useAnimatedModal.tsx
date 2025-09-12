import { useSpring } from "@react-spring/web";
import { selectModalOpenStatus } from "../../model"
import { useAppSelector } from "../store/customReduxHooks"

export const useAnimatedModal = () => {
    const isOpen = useAppSelector(selectModalOpenStatus);

    const springs = useSpring({
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.9,
        config: { tension: 500 }
    });

    return springs;
}

import { easings, useSpring, useSpringRef } from "@react-spring/web";
import { useRef } from "react";

export const useFilterArrowAnimation = () => {
    const isAnimatingRef = useRef(false);

    const arrowApi = useSpringRef();
    const arrowSprings = useSpring({
        ref: arrowApi,
        from: {
            rotate: '180deg',
        },
    });

    const rotateAnimatingArrow = () => {
        if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            arrowApi.start({
                rotate: arrowSprings.rotate.get() === '0deg' ? '180deg' : '0deg',
                config: {
                    duration: 200,
                    easing: easings.easeOutBack,
                }
            });

            setTimeout(() => {
                isAnimatingRef.current = false;
            }, 200);
        } else return;
    }

    return {
        arrowSprings,
        rotateAnimatingArrow
    };
}

import { easings, useSpring, useSpringRef } from "@react-spring/web"
import { useRef } from "react";
import { useAppDispatch } from "../../../../shared/lib";
import { changeFilter } from "../../../../entities/Filter";

export const useFilterListAnimation = () => {
    const dispatch = useAppDispatch();
    const isOpenRef = useRef(false);
    const isAnimatingRef = useRef(false);

    const api = useSpringRef();
    const springs = useSpring({
        ref: api,
        from: {
            opacity: 0,
            scale: 0,
            y: '100%',
        },
    });

    const changeAnimatingFilter = (filter: FilterType) => {
        api.start({
            to: {
                opacity: 0,
                scale: 0,
            }
        });
        setTimeout(() => {
            dispatch(changeFilter({ filter }));
            isOpenRef.current = false;
        }, 200);
    }

    const toggleAnimatingList = () => {
        if (!isAnimatingRef.current) {
            isAnimatingRef.current = true;
            api.start({
                to: {
                    opacity: springs.opacity.get() === 1 ? 0 : 1,
                    scale: springs.scale.get() === 1 ? 0 : 1,
                },
                config: {
                    duration: 200,
                    easing: easings.easeOutBack,
                }
            });

            setTimeout(() => {
                isOpenRef.current = !isOpenRef.current;
                isAnimatingRef.current = false;
            }, 200);
        } else return;
    }

    const closeByOutsideClick = () => {
        api.start({
            to: {
                opacity: 0,
                scale: 0,
            }
        });
        setTimeout(() => isOpenRef.current = false, 200);
    }

    return { 
        springs, 
        isOpenRef, 
        changeAnimatingFilter, 
        toggleAnimatingList, 
        closeByOutsideClick 
    };
}

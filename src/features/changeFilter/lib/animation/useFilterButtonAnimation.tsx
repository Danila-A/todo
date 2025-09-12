import { useSpring } from "@react-spring/web"
import { useRef, useState } from "react";

export const useFilterButtonAnimation = () => {
    // const [isElementVisible, setIsElementVisible] = useState(false);
    const isElementVisible = useRef(false);
    const [springs, api] = useSpring(() => ({
        from: {
            opacity: 0,
            scale: 0.9,
            y: '90%',
        },
        to: {
            opacity: 1,
            scale: 1,
            y: '100%',
        },
        // reverse: isElementVisible ? true : false,
        
    }), [isElementVisible]);

    return { springs, isElementVisible, api };
}

import { useTrail } from "@react-spring/web";

export const useListAnimation = (todos: TodoItem[]) => {
    const displayWidth = window.innerWidth;
    const fromAndLeaveScale = displayWidth > 768 ? 1.1 : 1;

    return useTrail(todos.length, {
        from: {
            opacity: 0,
            scale: fromAndLeaveScale,
        },
        to: {
            opacity: 1,
            scale: 1,
        },
        config: {
            tension: 450,
            mass: 0.8
        },
    });
}

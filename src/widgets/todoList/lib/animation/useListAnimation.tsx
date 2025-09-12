import { useTransition } from "@react-spring/web";

export const useListAnimation = (todos: TodoItem[]) => {
    const displayWidth = window.innerWidth;
    const fromAndLeaveScale = displayWidth > 768 ? 1.1 : 1;

    return useTransition(
        todos, 
        {
            from: { 
                opacity: 0,
                scale: fromAndLeaveScale
            },
            enter: { 
                opacity: 1,
                scale: 1
            },
            leave: { 
                opacity: 0,
                scale: fromAndLeaveScale
            },
            trail: 50,
            sort: (a, b) => a.id < b.id ? 1 : -1,
            config: {
                tension: 300,
                mass: 1
            },          
        }
    );
}

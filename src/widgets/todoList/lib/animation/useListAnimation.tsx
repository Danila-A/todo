import { useTransition } from "@react-spring/web";

export const useListAnimation = (todos: TodoItem[]) => {
    return useTransition(
        todos, 
        {
            from: { 
                opacity: 0,
                scale: 1.1
            },
            enter: { 
                opacity: 1,
                scale: 1
            },
            leave: { 
                opacity: 0,
                scale: 1.1
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

import { getDataFromLocalStorage } from "../../../shared/lib";

export const getInitialState = () => {
    const dataFromLocalStorage = getDataFromLocalStorage<TodoItem[]>('todos');
    
    return { todoList: dataFromLocalStorage ? dataFromLocalStorage : [] }
}

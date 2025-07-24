export function getDataFromLocalStorage<T>(key: string): T | null {
    const data = window.localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

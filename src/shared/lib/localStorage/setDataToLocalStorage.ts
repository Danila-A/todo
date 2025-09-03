export function setDataToLocalStorage<T>(data: T, key: string): void {
    window.localStorage.setItem(key, JSON.stringify(data));
}

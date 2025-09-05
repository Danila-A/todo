export function setDataToLocalStorage<T>(data: T, key: string): void {
    if (!key) throw new Error("key don't must be an empty string!");
    if (!data) throw new Error("data don't must be an empty string!");
    window.localStorage.setItem(key, JSON.stringify(data));
}

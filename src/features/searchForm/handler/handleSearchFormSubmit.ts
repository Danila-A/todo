import { useAppDispatch } from "../../../app";
import { setSearchValue } from "../../../entities/Search";

export function handleSearchFormSubmit(value: string) {
    if (!value.trim())  return;
    useAppDispatch()(setSearchValue({ value }));
}

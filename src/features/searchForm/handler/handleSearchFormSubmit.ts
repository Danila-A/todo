import type { SubmitHandler } from "react-hook-form";
import { useAppDispatch, type SearchFormValue } from "../../../app";
import { setSearchValue } from "../../../entities/Search";

export const handleSearchFormSubmit: SubmitHandler<SearchFormValue> = (data) => {
    if (!data.search.trim())  return;
    useAppDispatch()(setSearchValue({ value: data.search }));
}

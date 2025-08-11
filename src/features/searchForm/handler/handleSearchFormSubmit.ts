import type { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../../app";
import { setSearchValue } from "../../../entities/Search";
import type { SearchFormValue } from "../../../app/types";

export const handleSearchFormSubmit: SubmitHandler<SearchFormValue> = (data) => {
    if (!data.search.trim())  return;
    useAppDispatch()(setSearchValue({ value: data.search }));
}

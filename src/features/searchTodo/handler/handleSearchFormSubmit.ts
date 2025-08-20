import type { SubmitHandler } from "react-hook-form";
import { setSearchValue } from "../../../entities/Search";
import type { SearchFormValue } from "../../../shared/types";
import { useAppDispatch } from "../../../shared/lib";

export const handleSearchFormSubmit: SubmitHandler<SearchFormValue> = (data) => {
    if (!data.search.trim())  return;
    useAppDispatch()(setSearchValue({ value: data.search }));
}

import { useAppDispatch } from "../../../app";
import { changeFilter, type FilterType } from "../../../entities/Filters";

export function changeFilterHandler(filter: FilterType) {
    const dispatch = useAppDispatch();
    dispatch(changeFilter({ filter }));
}

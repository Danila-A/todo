import { changeFilter, type FilterType } from "../../../entities/Filters";
import { useAppDispatch } from "../../../shared/lib";

export function changeFilterHandler(filter: FilterType) {
    const dispatch = useAppDispatch();
    dispatch(changeFilter({ filter }));
}

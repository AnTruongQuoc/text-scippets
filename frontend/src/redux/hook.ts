import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./reducers";
import { AppDispatch } from "./store";

//Hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
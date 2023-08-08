import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../Setup";
import { AppDispatch } from "../Setup/redux/store";
 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
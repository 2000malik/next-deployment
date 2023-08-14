"use client";

import { combineReducers } from 'redux';
import sidebarReducer from '@/redux/sidebar';
import authReducer from '@/redux/auth';

export const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    auth: authReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
"use client";

import { combineReducers } from "redux";
import authReducer from "../../Redux/Auth";
import sidebarReducer from "../../Redux/Sidebar";
import playerReducer from "../../Redux/player";
import podcastsReducer from "../../Redux/podcast";
import analyticsReducer from "../../Redux/analytics";

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
  audioPlayer: playerReducer,
  podcasts: podcastsReducer,
  analytics: analyticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

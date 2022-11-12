import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/users/userSlice'
import docReducer from './features/docs/docSlice'

export const store = configureStore({
  reducer: {
    docs: docReducer,
    users: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
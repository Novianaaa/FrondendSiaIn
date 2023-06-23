import { configureStore } from '@reduxjs/toolkit';
import dbReduser from "../features/dbSlice";


export const store = configureStore({
  reducer: {
    db:dbReduser
  },
});

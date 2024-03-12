import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
      isMenuOpen: true,
    },
    reducers: {

      openMenu: ( state, _ ) => {
        state.isMenuOpen = true;
      },

      closeMenu: (state, _) => {
        state.isMenuOpen = false;
      }

    }
})

export const {
  openMenu,
  closeMenu
} = uiSlice.actions;

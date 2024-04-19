// НЕ АКТУАЛЬНО, ПЕРЕРОБЛЕНО НА СЛАЙСИ

import { createReducer } from '@reduxjs/toolkit';
import { addContact, delateContact, filterContact } from './actions';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(delateContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, builder => {
  builder.addCase(filterContact, (state, action) => {
    return action.payload;
  });
});

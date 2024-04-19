// НЕ АКТУАЛЬНО, ПЕРЕРОБЛЕНО НА СЛАЙСИ

import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  ( name, number ) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);

export const delateContact = createAction('contacts/delateContact');

export const filterContact = createAction('filter/filterContact');

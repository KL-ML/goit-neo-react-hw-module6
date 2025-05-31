import { createSlice } from '@reduxjs/toolkit';
import initContacts from '../data/contacts.json';

const initialState = {
  items: initContacts,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;

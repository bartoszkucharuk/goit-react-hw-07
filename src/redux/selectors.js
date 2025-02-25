// export const contactsSelector = (state) => state.contacts.items;
// export const filtersSelector = (state) => state.filters.name;

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getStatusFilter = state => state.filters.name;

export const addPartyName = addPartyName => ({
  type: 'addPartyName',
  payload: {
    addPartyName,
  },
});

export const addPartyNameSuccess = () => ({ type: 'PARTY_NAME_SUCCESS', payload: '' });
export const addPartyNameFailed = () => ({ type: 'PARTY_NAME_FAILED', payload: '' });

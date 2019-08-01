
export const addPartyName = addPartyName => ({
  type: 'partyName',
  payload: {
    addPartyName,
  },
});

export const addPartyNameSuccess = () => ({ type: 'PARTY_NAME_SUCCESS', payload: '' });
export const addPartyNameFailed = () => ({ type: 'PARTY_NAME_FAILED', payload: '' });

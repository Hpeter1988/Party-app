
export const addPartyName = addPartyName => ({
  type: 'addPartyName',
  payload: {
    addPartyName,
  },
});

export const findMyParty = (partyName, mockId) => ({
  type: 'findMyParty',
  payload: {
    partyName, mockId,
  },
});

export const addPartyNameSuccess = () => ({ type: 'PARTY_NAME_SUCCESS', payload: '' });
export const addPartyNameFailed = () => ({ type: 'PARTY_NAME_FAILED', payload: '' });

export const findMyPartyFailed = () => ({ type: 'FIND_PARTY_FAILED', payload: '' });

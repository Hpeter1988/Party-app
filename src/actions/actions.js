
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

export const createMyParty = partyName => ({
  type: 'createMyParty',
  payload: {
    partyName,
  },
});

export const addPartyNameSuccess = () => ({ type: 'PARTY_NAME_SUCCESS', payload: '' });
export const addPartyNameFailed = () => ({ type: 'PARTY_NAME_FAILED', payload: '' });

export const findMyPartyFailed = () => ({ type: 'FIND_PARTY_FAILED', payload: '' });

export const createMyPartyFailed = () => ({ type: 'CREATE_PARTY_FAILED', payload: '' });

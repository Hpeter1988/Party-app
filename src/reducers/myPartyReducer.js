const initialState = {
  status: '',
};

const findPartyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PARTY_NAME_FAILED':
      return {
        status: action.payload,
      };
    default:
      return state;
  }
};

export default findPartyReducer;

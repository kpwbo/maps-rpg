export const getCash = state => state.cash;

export const getBank = state => placeId => (state.banks.has(placeId) ?
  state.banks.get(placeId) : 0);

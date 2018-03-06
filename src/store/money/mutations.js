export const deposit = (state, { amount, placeId }) => {
  if (amount > 0 && amount <= state.cash) {
    state.cash -= amount;
    state.banks.set(placeId, (state.banks.get(placeId) || 0) + amount);
    state.banks = new Map(state.banks);
  }
};

export const withdraw = (state, { amount, placeId }) => {
  const prevBank = state.banks.get(placeId) || 0;
  if (amount > 0 && amount <= prevBank) {
    state.cash += amount;
    state.banks.set(placeId, prevBank - amount);
    state.banks = new Map(state.banks);
  }
};

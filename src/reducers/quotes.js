export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      // debugger
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      let index = state.findIndex(quote => quote.id === action.quoteId)
      let quote = state[index]
      return [...state.slice(0, index), Object.assign({}, quote, {votes: quote.votes += 1}), ...state.slice(index +1)];
    case "DOWNVOTE_QUOTE":
      let index2 = state.findIndex(quote => quote.id === action.quoteId)
      let quote2 = state[index2]
      if (quote2.votes > 0) {
        return [...state.slice(0, index2), Object.assign({}, quote2, { votes: quote2.votes -= 1 }), ...state.slice(index2 + 1)];
      }
    default:
      return state;
  }
}

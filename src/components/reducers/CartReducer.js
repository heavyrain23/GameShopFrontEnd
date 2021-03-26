export default function cartReducer(state, action) {
  switch (action.type) {
    case "clear":
      return [];
    case "add":
      return [...state, action.item];
    case "increase":
      action.item.quantity++;
      return [...state];
    case "delete":
      return state.filter((game) => game !== action.item);
    case "decrease":
      if (action.item.quantity > 1) {
        action.item.quantity--;
      }
      return [...state];
    default:
      console.log(`Type: ${action.type} is incorrect`);
  }
}

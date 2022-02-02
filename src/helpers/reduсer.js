const reducer = (state, action) => {
  switch (action.type) {
    case 'addCat':
      return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
    case 'addDog':
      return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}
    case 'deleteCat':
      return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
    case 'deleteDog':
      return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}
    default:
      return state
  }
}

export default reducer
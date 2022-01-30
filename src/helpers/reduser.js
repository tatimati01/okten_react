const reducer = (state, action) => {
  if (action.type === 'cat') {
    console.log('cat');
  } else if (action.type === 'dog') {
    console.log('dog');
  } else {

  }
}

export default reducer
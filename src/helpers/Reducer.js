
const Reducer = (state, action) => {
    switch (action.type) {
        case 'inc1': {
            return {...state, counter1: state.counter1 +1}
        }
        case 'inc2': {
            return {...state, counter2: state.counter2 +1}
        }
        case 'inc3': {
            return {...state, counter3: state.counter3 +1}
        }
        case 'dec1': {
            return {...state, counter1: state.counter1 -1}
        }
        case 'dec2': {
            return {...state, counter2: state.counter2 -1}
        }
        case 'dec3': {
            return {...state, counter3: state.counter3 -1}
        }
        case 'reset1': {
            return {...state, counter1: 0}
        }
        case 'reset2': {
            return {...state, counter2: 0}
        }
        case 'reset3': {
            return {...state, counter3: 0}
        }
        default: {
            return state
        }
    }
};

export default Reducer;
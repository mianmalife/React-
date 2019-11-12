import { INCREMENT, DECREMENT, RESET } from '../action/add'
const initialState = {
    count: 0
}

export default function addReducer(state = initialState, action) {
    console.log(action, state)
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count ? state.count - 1 : 0
            }
        case RESET:
            return {
                count: 0
            }
        default:
            return state
    }
}


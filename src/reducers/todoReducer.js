export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Reducers project',
            completed: false,
            id: 3892987590
        }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            return {
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case "DELETE_FROM_LIST":
            return {
                todos: [
                    ...state.todos
                ]
            }
        case "TOGGLE_COMPLETE":
            let clickNewState = state.map(item => {
                if (item.id == action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item
                }
            })
            return clickNewState
            
        default:
            return state
    }
}
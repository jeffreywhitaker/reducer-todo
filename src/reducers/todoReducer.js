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
    case "DELETE_COMPLETED":
        return {
            todos: state.todos.filter(todo => {
                if (todo.completed === true) {
                    return false
                } else return true
            })
        }
    case "TOGGLE_COMPLETE":
        return {
            todos: state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })
        }
    default:
        return state
    }
}
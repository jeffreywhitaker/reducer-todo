import React from 'react'
import styled from 'styled-components'

export default function Todo(props) {
    return (
        <TodoListItem onClick={() => {props.todoDispatch({ type: "TOGGLE_COMPLETE", payload: props.todo.id })}} completed={props.todo.completed}>{props.todo.item}</TodoListItem>
    )
}

// styled components

const TodoListItem = styled.li`
    text-align: center;
    font-size: 20px;
    text-decoration: ${props => props.completed ? 'line-through' : ''}
`
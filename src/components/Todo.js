import React from 'react'
import styled from 'styled-components'

export default function Todo(props) {
    return (
        <TodoListItem>{props.item.task}</TodoListItem>
    )
}

// styled components

const TodoListItem = styled.li`
    text-align: center;
    font-size: 20px;
`
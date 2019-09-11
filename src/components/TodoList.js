import React from 'react'
import styled from 'styled-components'

import Todo from './Todo'

export default function TodoList(props) {
    return (
        <>
        <SubHeader>Things to do:</SubHeader>
        {props.todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} todoDispatch={props.todoDispatch}/>
        })}
        </>
    )
}

// styled components

const SubHeader = styled.h3`
    text-align: center;
`
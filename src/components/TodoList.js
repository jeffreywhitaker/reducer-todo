import React from 'react'
import styled from 'styled-components'

import Todo from './Todo'

export default function TodoList(props) {
    return (
        <>
            <SubHeader>Things to do:</SubHeader>
            {props.todos.map((listItem) => {
                    return <Todo handleSetAsComplete={props.handleSetAsComplete} item={listItem}  key={listItem.id}/>
                })}
        </>
    )
}

// styled components

const SubHeader = styled.h3`
    text-align: center;
`
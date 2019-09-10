import React, { dispatch } from 'react'
import styled from 'styled-components'

export default function TodoFillOutForm(props) {
    let ToDoDummyItem = {
        item: 'DUMMY ITEM',
        completed: false,
        id: 38929875902343324
    }

    return (
        <TodoFormDiv>
            <TodoFormInput onChange={props.handleMessageToState} placeholder="...add todo" />
            <TodoFormButton onClick={() => {dispatch({ type: "ADD_TO_LIST", payload: ToDoDummyItem })}}>Add to List</TodoFormButton>
            <TodoFormButton onClick={() => {dispatch({ type: "DELETE_FROM_LIST", payload: ToDoDummyItem })}}>Delete</TodoFormButton>
        </TodoFormDiv>
    )
}

// styled components

const TodoFormDiv = styled.div`
    display: flex;
    margin: 20px 5px;
    justify-content: center;
`

const TodoFormButton = styled.button`
    background-color: lightpink;
    padding: 10px 10px;
    margin: 0 15px;
    border-radius: 15px;
`

const TodoFormInput = styled.input`
    padding: 10px 5px;
    margin: 0 15px;
`
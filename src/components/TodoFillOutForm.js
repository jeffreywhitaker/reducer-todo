import React, { useState } from 'react'
import styled from 'styled-components'

export default function TodoFillOutForm(props) {
    const [todoString, setTodoString] = useState("")

    const makeNewTodoItem = (e) => {
        return {
            item: todoString,
            completed: false,
            id: Date.now()
        }
    }

    const addToListDispatch = function() {
        props.todoDispatch(
            { type: "ADD_TO_LIST", payload: makeNewTodoItem() }
        )
        setTodoString("")
    }

    return (
        <TodoFormDiv>
            <TodoFormInput onChange={(e) => {setTodoString(e.target.value)}} placeholder="...add todo" value={todoString} />
            <TodoFormButton onClick={addToListDispatch}>Add to List</TodoFormButton>
            <TodoFormButton onClick={() => {props.todoDispatch({ type: "DELETE_COMPLETED" })}}>Clear Completed</TodoFormButton>
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
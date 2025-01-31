import React, { useState, useReducer } from 'react'
import styled from 'styled-components'

import TodoFillOutForm from './components/TodoFillOutForm'
import TodoList from './components/TodoList'
import './App.css'
import { initialState, todoReducer } from './reducers/todoReducer'


export default function App() {
    const [todoState, todoDispatch] = useReducer(todoReducer, initialState)

    return (
        <MainBody>
            <MainHeader>Jeff's (Reducer) ToDo App</MainHeader>
            <TodoFillOutForm todoDispatch={todoDispatch} />
            <TodoList todos={todoState.todos} todoDispatch={todoDispatch}/>
        </MainBody>
    )
}

const MainBody = styled.section`
  background-color: cyan;
  max-width: 1100px;
  margin: 0 auto;
`

const MainHeader = styled.h2`
  text-align: center;
  margin-top: 0px;
  padding-top: 10px;
`

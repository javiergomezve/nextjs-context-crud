'use client'

import {createContext, useContext} from "react";
import {v4 as uuid} from 'uuid'
import {useLocalStorage} from "@/hooks/useLocalStorage";

export const TaskContext = createContext()

export const useTasks = () => {
    const context = useContext(TaskContext)
    if (!context) throw new Error('useTask must be used within a provider')
    return context
}

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const createTask = (title, description) => {
        setTasks([
            ...tasks,
            {id: uuid(), title, description,}
        ])
    }

    const deleteTask = (id) => {
        const newTasks = tasks.filter(t => t.id !== id)
        setTasks(newTasks)
    }

    const updateTask = (id, {title, description}) => {
        const newTasks = tasks.map(t => t.id === id ? {id, title, description} : t)
        setTasks(newTasks)
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask,
                updateTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}
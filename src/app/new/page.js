'use client'

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useForm} from 'react-hook-form'
import {useTasks} from "@/context/taskContext";
import toast from "react-hot-toast";

export default function NewPage({params}) {
    const router = useRouter()

    const {
        register,
        handleSubmit : submit,
        setValue,
        formState: {
            errors,
        }
    } = useForm()

    const {tasks, createTask, updateTask} = useTasks()

    const handleSubmit = submit(data => {
        if (params.id) {
            updateTask(params.id, data)
            toast.success('task updated successfully')
        } else {
            createTask(data.title, data.description)
            toast.success('task created successfully')
        }

        router.push('/')
    });

    useEffect(() => {
        if (params.id) {
            const t = tasks.find(t => t.id === params.id)
            if (t) {
                setValue('title', t.title)
                setValue('description', t.description)
            }
        }
    }, [])

    return (
        <div className="flex justify-centeritems-center h-full">
            <form onSubmit={handleSubmit} className="bg-gray-700 p-10">
                <input
                    className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
                    placeholder="Write a title"
                    {...register('title', {required: true})}
                />
                {errors.title && (
                    <span className="block text-red-400 mb-2">This field is required</span>
                )}

                <textarea
                    className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
                    placeholder="Write a description"
                    {...register('description', {required: true})}
                />
                {errors.description && (
                    <span className="block text-red-400 mb-2">This field is required</span>
                )}

                <button
                    className="bg-green-500 bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
                    type="submit"
                >
                    Save
                </button>
            </form>
        </div>
    )
}

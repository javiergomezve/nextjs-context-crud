'use client'

import {useTasks} from "@/context/taskContext";
import TaskCard from "@/components/TaskCard";

export default function Home() {
    const {tasks} = useTasks()

    return (
        <div className="flex justify-center">
            <div className="w-7/12">
                <h1>Tasks</h1>

                {tasks.map(task => <TaskCard key={task.id} task={task}/>)}
            </div>
        </div>
    )
}

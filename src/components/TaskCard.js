import {useRouter} from "next/navigation";
import {useTasks} from "@/context/taskContext";
import toast from "react-hot-toast";


export default function TaskCard({task}) {
    const router = useRouter()

    const {deleteTask} = useTasks()

    const handleDelete = (e) => {
        e.stopPropagation()

        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            deleteTask(task.id)
            toast.success('task deleted successfully')
        }
    }

    return (
        <div
            className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex"
            onClick={() => {
                router.push(`/edit/${task.id}`)
            }}
        >
            <div className="flex justify-between">
                <h2>{task.title}</h2>
                <button
                    className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>

            <p className="text-gray-300">{task.description}</p>

            <span className="text-gray-400 text-sm">{task.id}</span>
        </div>
    )
}


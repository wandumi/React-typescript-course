
interface CourseGoalProps {
    id: number,
    title: string,
    description: string,
    onDelete: (id: number) => void
}

export default function CourseGoal({ id, title, description, onDelete }: CourseGoalProps ) {
    return (
        <article className="p-5 text-black rounded-lg relative">
            <div className="mb-10">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
            <button
                onClick={() => onDelete(id)}
                className="absolute bottom-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
                Delete
            </button>
        </article>

    )
}

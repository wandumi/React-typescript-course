import CourseGoal from "./CourseGoal"

type CourseGoalListProps = {
    goals: {
        title: string,
        description: string,
        id: number
    }[],
    onDeleteGoal: (id: number) => void
}
function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
    return (
        <ul className={`grid gap-4 mt-5 p-5 bg-gray-500 rounded-sm grid-cols-1 ${goals.length > 1 ? "md:grid-cols-2" : ""}`}>
        {goals.map((goal) => (
            <li key={goal.id} className="p-4 bg-white rounded-lg">
                <CourseGoal
                    id={goal.id}
                    title={goal.title}
                    onDelete={onDeleteGoal}
                    description={goal.description}
                />
            </li>
        ))}
        </ul>
    )
}

export default CourseGoalList
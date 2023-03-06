import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({ courses }) => {
    const courseData = courses.map(course => {
        let total = course.parts.reduce((acc, currentValue) => {
            return acc + currentValue.exercises
        }, 0)

        return (
        <>
            <div>
                <Header course={course.name} />
                <Content parts={course.parts} />
                <Total total={total} />
            </div>
        </>
        )
    })

    return (
        <div>
            {courseData}
        </div>
    )
}

export default Course
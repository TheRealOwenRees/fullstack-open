import Part from "./Part"

const Content = ({ parts }) => {
    const partData = parts.map(part => {
        return (
            <Part name={part.name} exercises={part.exercises} />
        )
    })

    return (
        <div>
            {partData}
        </div>
    )
}
export default Content
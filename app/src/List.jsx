import { useState } from "react";

// this is a function that allows the user to add a new workout to the list
// it gives the list a name 
function WorkoutList(){
    const [workout, setWorkout] = useState("");
    const [workoutList, setWorkoutList] = useState([]);

    const handleChange = (e) => {
        setWorkout(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setWorkoutList([...workoutList, workout]);
        setWorkout("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={workout} onChange={handleChange} />
                <input type="submit" value="Add Workout" />
            </form>
            <ul>
                {workoutList.map((workout) => (
                    <li key={workout}>{workout}</li>
                ))}
            </ul>
        </div>
    );
}

export default WorkoutList;
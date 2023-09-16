import { useState, useEffect } from 'react';
import WorkoutList from './List';


function App() {
  return (
    <div>
      <h1>Welcome to fitPro</h1>
      <h2>Here you'll be able to manage your workout</h2>

      <WorkoutList />

    </div>
  )
}

export default App;

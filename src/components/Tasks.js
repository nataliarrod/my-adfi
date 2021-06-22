import React, { useState } from 'react';

function Tasks({ tasks }) {
  return tasks.map((task) => {
    return (
    <div key={task.id} className={`task-${task.id}`}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done ? 'Completed' : 'In progress'}</span>
      {!task.done ?
         <button>Complete</button> :
         <span>Congrats</span>
      }
    </div>
    );
  });
}

export default Tasks;
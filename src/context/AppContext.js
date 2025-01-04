import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Global state for notes, tasks, and teams
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [teams, setTeams] = useState([]); // Teams state now includes notes and tasks

  // === Global Notes and Tasks ===
  const addNote = (note) => setNotes((prev) => [...prev, note]);
  const addTask = (task) => setTasks((prev) => [...prev, task]);

  const editNote = (index, updatedNote) => {
    setNotes((prev) =>
      prev.map((note, idx) => (idx === index ? updatedNote : note))
    );
  };

  const editTask = (id, updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const removeNote = (index) =>
    setNotes((prev) => prev.filter((_, idx) => idx !== index));

  const removeTask = (id) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));

  // === Team Functionality ===
  const addTeam = (teamName) => {
    const newTeam = {
      id: new Date().getTime(), // Unique ID for the team
      name: teamName,
      notes: [], // Notes for this team
      tasks: [], // Tasks for this team
    };
    setTeams((prev) => [...prev, newTeam]);
  };

  const addNoteToTeam = (teamId, note) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId
          ? { ...team, notes: [...team.notes, note] }
          : team
      )
    );
  };

  const addTaskToTeam = (teamId, task) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId
          ? { ...team, tasks: [...team.tasks, task] }
          : team
      )
    );
  };

  const editNoteInTeam = (teamId, noteIndex, updatedNote) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId
          ? {
              ...team,
              notes: team.notes.map((note, index) =>
                index === noteIndex ? updatedNote : note
              ),
            }
          : team
      )
    );
  };

  const editTaskInTeam = (teamId, taskId, updatedTask) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId
          ? {
              ...team,
              tasks: team.tasks.map((task) =>
                task.id === taskId ? { ...task, ...updatedTask } : task
              ),
            }
          : team
      )
    );
  };

  const removeNoteFromTeam = (teamId, noteIndex) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId
          ? {
              ...team,
              notes: team.notes.filter((_, index) => index !== noteIndex),
            }
          : team
      )
    );
  };

  const removeTaskFromTeam = (teamId, taskId) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId
          ? {
              ...team,
              tasks: team.tasks.filter((task) => task.id !== taskId),
            }
          : team
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        // Global Notes and Tasks
        notes,
        tasks,
        addNote,
        addTask,
        editNote,
        editTask,
        removeNote,
        removeTask,

        // Team-Specific Features
        teams,
        addTeam,
        addNoteToTeam,
        addTaskToTeam,
        editNoteInTeam,
        editTaskInTeam,
        removeNoteFromTeam,
        removeTaskFromTeam,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TaskList from './TaskList';
import AddTask from './AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    if (title.trim() !== '') {
      setTasks([...tasks, { id: tasks.length, title }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default App;

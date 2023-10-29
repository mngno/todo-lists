import React from 'react';
import { View, FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(task) => task.id.toString()}
      />
    </View>
  );
};

export default TaskList;

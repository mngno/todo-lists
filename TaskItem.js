import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TaskItem = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text>{task.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default TaskItem;

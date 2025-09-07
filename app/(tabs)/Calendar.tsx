import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Calendar } from 'react-native-calendars';

const App = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedColor: 'orange'}
      }}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#102820",
  },
  text: {
    color: "white",
  },
});

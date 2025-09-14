import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Calendar } from 'react-native-calendars';

const App = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
        console.log('selected day', day);
        day.dateString
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedColor: 'black'}
      }}
      theme={{
        backgroundColor: '#1f4e3eff',
        calendarBackground: '#1f4e3eff',
        textSectionTitleColor: '#000000ff',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#000000ff',
        textDisabledColor: '#dd99ee'
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

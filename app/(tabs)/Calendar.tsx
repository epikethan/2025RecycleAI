import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from "react-native";
import { Calendar } from 'react-native-calendars';
import { storage } from "../storage";

var daySelected = '';
var dayPoints = storage.GetDayPoints(daySelected);

const App = () => {
  const [selected, setSelected] = useState('');
  const [dayIsSelected, setDaySelected] = useState(false);

  if (dayIsSelected){
    dayPoints = storage.GetDayPoints(daySelected);
    console.log("Date String: " + daySelected);
    console.log(dayPoints);
    if (dayPoints == undefined){
      dayPoints = 0;
    }
    return(
      <View style = {styles.container}>
        <View style = {styles.footerContainer}>
          <Text style = {styles.Header}>On {daySelected}, {"\n"}you earned: {"\n"}{dayPoints} Points!</Text>
        </View>
        <View style={styles.footerContainer}>
          <Button 
            title="go back"
            onPress={()=>{setDaySelected(false)}}
          />
        </View>
      </View>
    )
  } else {
    return (
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
          daySelected = day.dateString;
          setDaySelected(true);
          console.log("Date: " + daySelected);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true, selectedColor: 'black' }
        }}
        style={{
          borderWidth: 10,
          borderColor: "#102820",
          height: 664
        }}
        theme={{
          backgroundColor: '#00adf5',
          calendarBackground: '#102820',
          textSectionTitleColor: '#caba9c',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#f8ff36ff',
          selectedDayTextColor: '#caba9c',
          todayTextColor: '#ffa600ff',
          dayTextColor: '#caba9c',
          textDisabledColor: '#ffffffff',
          dotColor: '#ff0000ff',
          selectedDotColor: '#7fceffff',
          arrowColor: '#caba9c',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#caba9c',
          indicatorColor: '#ea00ffff',

          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
      />
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#102820",
  },
  Header: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 20,
    padding: 100,
  },
  text: {
    justifyContent: "center",
    color: "white",
  },
  footerContainer:{
    alignItems: "center",
  },
});

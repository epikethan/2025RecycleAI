import { Calendar } from 'react-native-calendars';

<Calendar
  onDayPress={day => {
    console.log('selected day', day);
  }}
/>
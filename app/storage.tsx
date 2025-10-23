import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";

class Storage{
    points = 0;
    pointsMap = new Map();
    
    //SavePoints
    async SavePoints(p: number) {
        const todayDate = moment().format("YYYY-MM-DD")
        this.points += p;
        await AsyncStorage.setItem("points", "" + this.points);
        console.log("hi this is the first console log: " + this.pointsMap.get(todayDate));
        if (this.pointsMap.has(todayDate))
        {
            const rollingPoints = this.pointsMap.get(todayDate) + p;
            console.log(rollingPoints);
            this.pointsMap.set(todayDate, rollingPoints);
        } else 
        {
            this.pointsMap.set(todayDate, p);
        }
        const serializedMap = JSON.stringify(Array.from(this.pointsMap.entries()));
        await AsyncStorage.setItem("Map", "" + serializedMap);
    }
    //GetDayPoints
    GetDayPoints(daySelected){
        if (daySelected !== null){
            return this.pointsMap.get(daySelected);
        }
        else{
            console.log("Null retrieved")
        }
    }

    //GetTotalPoints
    ReturnPoints() {
        return this.points;
    }

    //LoadPoints
    async LoadPoints() {
        const savedPoints = await AsyncStorage.getItem('points');
        const savedMap = await AsyncStorage.getItem('Map');

        if (savedPoints !== null) {
            this.points = parseInt(savedPoints,10);
            console.log("Points loaded: " + this.points);
        }
        else {
            console.log("Null retrieved");
        }
        if (savedMap !== null) {
            const deserializedMap = JSON.parse(savedMap);
            this.pointsMap = new Map(deserializedMap);
            console.log(this.pointsMap);
        }
        else {
            console.log("Null retrieved");
        }
    }
}
export const storage = new Storage(); 
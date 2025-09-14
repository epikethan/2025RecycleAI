import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage{
    points = 0;
    
    //SavePoints
    async SavePoints(p: number) {
        this.points += p;
        await AsyncStorage.setItem("points", "" + this.points);
    }
    //GetDayPoints

    //GetTotalPoints
    ReturnPoints() {
        return this.points;
    }

    //LoadPoints
    async LoadPoints() {
        const savedPoints = await AsyncStorage.getItem('points');
        if (savedPoints !== null) {
            this.points = parseInt(savedPoints,10);
            console.log("Points loaded: " + this.points);
        }
        else {
            console.log("Null retrieved");
        }
    }
}
export const storage = new Storage(); 
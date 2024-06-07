import { useState } from "react";
import {
  
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import Goalitem from './src/components/Goalitem';
import Goalinput from './src/components/Goalinput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  
  
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <Goalinput onAddGoal={addGoalHandler}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <Goalitem text={itemData.item.text}/>
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  
  goalContainer: {
    flex: 4,
  },
  
});

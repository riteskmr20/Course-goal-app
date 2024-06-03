import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
const [enteredGoalText,setEnteredGoalText]=useState('');


  function goalInputHandler(enteredText){
   setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
     console.log(enteredGoalText);
  }
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course goal!" onChangeText={goalInputHandler}/>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    padding: 50,
    paddingHorizontal:16
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,

  },
  textInput:{
    borderWidth:1,
    borderColor: '#cccccc',
    width:'70%',
    marginRight:8
  },
  goalContainer:{
   flex:4,
  }
});

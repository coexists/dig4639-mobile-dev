import React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity} from 'react-native';
import questions from "./questions.json";

const TIME_LIMIT = 5
const TITLE_STATE = 0
const QUESTION_STATE = 1
const FINAL_STATE = 2

class QuizQuestion extends React.Component{
  render(){
    return<>
    <Text style = {styles.questext}>{this.props.question}</Text>
    {this.props.answers.map((v,i) => 
    <Button color = "#e8b390" title = {v.text} onPress = {() => this.props.questionUp(v.correct)} key = {i} 
    value = {v.text} />)}
    </>
  }
}

class TitlePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      score : 0,
      titleText: "Test Your Animal Crossing Knowledge!",
      counter : 0,
      currentState: TITLE_STATE,
      currentQuestion: 0
    }
    this.timeLimit = TIME_LIMIT
  }
  questionUp(correct){
    
    if(correct){
      this.setState({score: this.state.score + 1})
    }
    if(this.state.currentQuestion == questions.length - 1) {
      this.setState({
        currentState: FINAL_STATE
      })
    }
    else{
      clearInterval(this.timer)
      console.log(this.state.currentQuestion)
      this.setState({
        titleText : "You answered X",
        currentState : QUESTION_STATE,
        currentQuestion : this.state.currentQuestion + 1
        
      })
    }
  }
  countdown(){
    console.log(this.state.counter)
    if(this.state.counter < this.timeLimit){
      this.setState({
        titleText : 'Quiz will start in:',
        counter : this.state.counter + 1
      })
    }
    
    else{
      this.setState({
        titleText: "Beginning Quiz!",
        currentState: QUESTION_STATE,
        counter: 0
      })
      
      if(this.state.currentState == TITLE_STATE){
        this.timer = setInterval(() => this.countdown(), 1000)
        clearInterval(this.timer)
      }

      else{
        this.setState({titleText: "Answered"})
      }
    }
  }
  start(){
    this.setState({titleText: "Starting the Quiz!!", counter: 0})
    this.timer = setInterval(() => this.countdown(), 1000)
  }
  render(){
    return(
      <>
      <Text>{this.timeLimit - this.state.counter}</Text>
      {((this.state.currentState === TITLE_STATE) 
        ? <>
        <Text style = {styles.questext}>{this.state.titleText}</Text>
        <StartButton color = "#e8b390" title = "Start" onPress = {() => this.start()} />
        </>
        : (this.state.currentState === FINAL_STATE)
        ? <Text style = {styles.questext}>Complete! You Scored: {this.state.score}</Text>
        : <QuizQuestion
            answers={questions[this.state.currentQuestion].chosenAnswers} 
            question={questions[this.state.currentQuestion].question} 
            questionUp={(correct) => this.questionUp(correct)} />
      )}
      <Text style={styles.scores}>Current Score: {this.state.score} </Text>
      </>
    )
  }
}
function StartButton(props)  {
  return <TouchableOpacity onPress={props.onPress}
    style={styles.start}>
      <View style={styles.buttonView}>
    <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
}

class App extends React.Component{
  render(){
    return(
      <View style = {styles.page}>
        <Text style = {styles.current}>Animal Crossing Quiz!</Text>
        <TitlePage>Test Your Animal Crossing Knowledge!</TitlePage>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: "#e8b390",
    padding:10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  start: {
    alignItems: "center",
    
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#c9f2bb",
    justifyContent: "center",
    padding: 10,
  },
  current: {
    color: "#32a8a4",
    fontSize: 40,
    padding: 10,
    margin: 10,
  },
  scores: {
    color: "#460578",
    fontSize: 20,
    padding: 10
  },
questext: {
    color: "#32a8a4",
    fontSize: 20,
    padding: 10
  }


})

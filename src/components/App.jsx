import React, {Component} from "react";
import Statistics from "./Statistics";

export class App extends Component  {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  goodFeedbackAdd = () =>
    this.setState((prevState) => ({
      good: prevState.good + 1
    }));  
  
  neutralFeedbackAdd = () =>
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1
    })); 
  
  badFeedbackAdd = () =>
    this.setState((prevState) => ({
      bad: prevState.bad + 1
      })); 
  
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good/this.countTotalFeedback()*100)
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please leave feedback</h2> 
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}/>
          <button onClick={this.goodFeedbackAdd}>Good</button> 
          <button onClick={this.neutralFeedbackAdd}>Neutral</button>
          <button onClick={this.badFeedbackAdd}>Bad</button>
        
      </>
    );
}
};

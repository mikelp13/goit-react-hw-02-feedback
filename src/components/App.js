import React, { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (e) => {
    const btnType = e.target.name;
    this.setState((prevState) => ({
      [btnType]: prevState[btnType] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      return (acc += value);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return good && Math.round((good / total) * 100);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <Statistics
              {...this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

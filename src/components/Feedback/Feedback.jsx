import React, { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../Controls';
import Stats from '../Stats';
import Notification from '../Notification';
class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handlePositiveFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleNegativeFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    if (this.state.good === 0) {
      return 0;
    } else return (this.state.good / this.countTotalFeedback()) * 100;
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onPositive={this.handlePositiveFeedback}
            onNeutral={this.handleNeutralFeedback}
            onNegative={this.handleNegativeFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Stats
              positive={this.state.good}
              neutral={this.state.neutral}
              negative={this.state.bad}
              total={this.countTotalFeedback()}
              percentOfPositives={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;

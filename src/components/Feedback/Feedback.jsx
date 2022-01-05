import React, { Component } from 'react';
import Controls from './Controls';
import Stats from './Stats';
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

  render() {
    return (
      <div>
        <Controls
          onPositive={this.handlePositiveFeedback}
          onNeutral={this.handleNeutralFeedback}
          onNegative={this.handleNegativeFeedback}
        />
        <Stats
          positive={this.state.good}
          neutral={this.state.neutral}
          negative={this.state.bad}
        />
      </div>
    );
  }
}

export default Feedback;

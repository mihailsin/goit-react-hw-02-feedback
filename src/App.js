import React from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification';
import Section from './components/Section';
import Stats from './components/Stats';

import Div from './App.styled';
class App extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleFeedback = e => {
    this.setState(prevState => ({
      [e.target.value]: prevState[e.target.value] + 1,
    }));
  };

  countTotalFeedback() {
    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;

    // code above works fine, but reduce method looks better:

    const values = Object.values(this.state);
    const total = values.reduce((acc, value) => {
      return value + acc;
    }, 0);
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (good === 0) {
      return 0;
    } else return (good / this.countTotalFeedback()) * 100;
  }

  render() {
    const stateKeys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Stats
              positive={good}
              neutral={neutral}
              negative={bad}
              total={this.countTotalFeedback()}
              percentOfPositives={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Div>
    );
  }
}

export default App;

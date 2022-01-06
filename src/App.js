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
    switch (e.target.textContent) {
      case 'Good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 'Neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'Bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
      default:
        return;
    }
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
      <Div>
        <Section title="Please leave feedback">
          <FeedbackOptions onFeedback={this.handleFeedback} />
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
      </Div>
    );
  }
}

export default App;

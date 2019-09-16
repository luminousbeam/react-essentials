import React, { Component } from 'react';
import { render } from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends React.Component{
  getPercent = decimal => {
    return decimal * 100 + '%'
  }

  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }

  render(){
    const { total, powder, backcountry, goal } = this.props
    return (
      <section>
        <h1>Ski Days</h1>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
        </div>
      </section>
    )
  }
}

render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal} />,
  document.getElementById('root')
)

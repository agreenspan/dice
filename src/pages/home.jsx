// @flow
import React from 'react';
import _ from 'lodash';
import {Button, Col, Container, Row} from 'reactstrap';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      black: {
        '1': -1,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 1
      },
      white: {
        '1': -1,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 2
      }
    }
  }

  handleChange = (event) => {
    this.setState(prev => {
      prev[event.target.name] = event.target.value;
      return prev;
    });
  };

  computeOutcomes = () => {
    const outcomeKeys = [];
    const outcomes = _.reduce([0,1,2,3,4,5], (outcomeMap, statRank) => {
      const rolls = _.map([1,2,3,4,5,6], d1 => {
        return _.map([1,2,3,4,5,6], d2 => { 
          return _.map([1,2,3,4,5,6], d3 => {
            return _.map([1,2,3,4,5,6], d4 => {
              return _.map([1,2,3,4,5,6], d5 => {
                let whitePool;
                let blackPool;
                switch (statRank) {
                  case 0:
                    blackPool = [d1,d2,d3,d4,d5]
                    whitePool = [];
                    break;
                  case 1:
                    blackPool = [d1,d2,d3,d4]
                    whitePool = [d5]
                    break;
                  case 2:
                    blackPool = [d1,d2,d3]
                    whitePool = [d4,d5]
                    break;
                  case 3:
                    blackPool = [d1,d2]
                    whitePool = [d3,d4,d5]
                    break;
                  case 4:
                    blackPool = [d1]
                    whitePool = [d2,d3,d4,d5]
                    break;
                  case 5:
                    blackPool = [];
                    whitePool = [d1,d2,d3,d4,d5]
                    break;
                }
                const whiteOutcome = _.reduce(whitePool, (sum, die) => {
                  if (die <= this.state.white.failRange) {
                    sum -= parseInt(this.state.white.failWeight);
                  } else if (die >= 7 - this.state.white.successRange) {
                    sum += parseInt(this.state.white.successWeight);
                  }
                  return sum;
                }, 0);
                const blackOutcome = _.reduce(blackPool, (sum, die) => {
                  if (die <= this.state.black.failRange) {
                    sum -= parseInt(this.state.black.failWeight);
                  } else if (die >= 7 - this.state.black.successRange) {
                    sum += parseInt(this.state.black.successWeight);
                  }
                  return sum;
                }, 0);
                const total = blackOutcome + whiteOutcome;
                if (!outcomeKeys.includes(total)) { outcomeKeys.push(total)}
                return total;
              });
            });
          });
        });
      });

      outcomeMap[statRank] = _.reduce(_.flattenDeep(rolls), (sorting, roll) => {
        if (sorting.hasOwnProperty(roll)) { sorting[roll] += 1}
        else { sorting[roll] = 1 }
        return sorting;
      }, {});

      return outcomeMap;
    }, {});
    // outcomeKeys = order 
    return {outcomeKeys, outcomes};
  };

  render () {
    const {outcomeKeys, outcomes} = this.computeOutcomes();
    const totalSuccess = _.reduce(outcomes, (total, p) => {
      if (p.outcome > 0) { total += p.chance}
      return total;
    }, 0);
    const totalFailure = _.reduce(outcomes, (total, p) => {
      if (p.outcome < 0) { total += p.chance}
      return total;
    }, 0);
    const displayOutcomes = _.map(outcomes, (o, i) => {
      return <tr key={i}>
        <td>{o.outcome}</td>
        <td>{o.chance.toFixed(2)}%</td>
      </tr>
    });

    return (
      <div>
        <link rel="stylesheet" 
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
          crossOrigin="anonymous"/>

        <Container style={{paddingTop: 20}}>
          <Row>
            <Col sm='3'>
              <Row>
                <Col sm='6'>
                  <label>Black:</label> 
                  <br/>
                  <input type='number'
                    name='black.1'
                    value={this.state.black['1']}
                    onChange={this.handleChange}
                    min={-5} max={-1}
                    />
                    <input type='number'
                    name='black.2'
                    value={this.state.black['2']}
                    onChange={this.handleChange}
                    min={-5} max={0}
                    />
                    <input type='number'
                    name='black.3'
                    value={this.state.black['3']}
                    onChange={this.handleChange}
                    min={-2} max={2}
                    />
                    <input type='number'
                    name='black.4'
                    value={this.state.black['4']}
                    onChange={this.handleChange}
                    min={2} max={2}
                    />
                    <input type='number'
                    name='black.5'
                    value={this.state.black['5']}
                    onChange={this.handleChange}
                    min={0} max={5}
                    />
                    <input type='number'
                    name='black.6'
                    value={this.state.black['6']}
                    onChange={this.handleChange}
                    min={1} max={5}
                    />
                  </Col>
                  <Col sm='6'>
                  <label>White: </label> 
                  <br/>
                  <input type='number'
                    name='white.1'
                    value={this.state.white['1']}
                    onChange={this.handleChange}
                    min={-5} max={-1}
                    />
                    <input type='number'
                    name='white.2'
                    value={this.state.white['2']}
                    onChange={this.handleChange}
                    min={-5} max={0}
                    />
                    <input type='number'
                    name='white.3'
                    value={this.state.white['3']}
                    onChange={this.handleChange}
                    min={-2} max={2}
                    />
                    <input type='number'
                    name='white.4'
                    value={this.state.white['4']}
                    onChange={this.handleChange}
                    min={2} max={2}
                    />
                    <input type='number'
                    name='white.5'
                    value={this.state.white['5']}
                    onChange={this.handleChange}
                    min={0} max={5}
                    />
                    <input type='number'
                    name='white.6'
                    value={this.state.white['6']}
                    onChange={this.handleChange}
                    min={1} max={5}
                    />
                </Col>                
              </Row>
            </Col>
            <Col sm='9'>
              <Row>
                <Col sm='12'>
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th></th>
                        <th colSpan={6}>Stat Rank</th>
                      </tr>
                      <tr>
                        <th>Outcome</th>
                        <th>0</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayOutcomes}
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Home;



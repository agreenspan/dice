// @flow
import React from 'react';
import _ from 'lodash';
import {Col, Container, Row} from 'reactstrap';
import {styled, withStyle, withStyleDeep, withTransform} from 'fusion-plugin-styletron-react';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      black: {
        one: -1,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 1
      },
      white: {
        one: -1,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 2
      }
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState(prev => {
      _.set(prev, name, value);
      return prev;
    });
  };

  computeOutcomes = () => {
    let outcomeKeys = [];
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
                  switch (die) {
                    case 1:
                      sum += parseInt(this.state.white.one)
                      break;
                    case 2:
                      sum += parseInt(this.state.white.two)
                      break;
                    case 3:
                      sum += parseInt(this.state.white.three)
                      break;
                    case 4:
                      sum += parseInt(this.state.white.four)
                      break;
                    case 5:
                      sum += parseInt(this.state.white.five)
                      break;
                    case 6:
                      sum += parseInt(this.state.white.six)
                      break;
                  } 
                  return sum;
                }, 0);
                const blackOutcome = _.reduce(blackPool, (sum, die) => {
                  switch (die) {
                    case 1:
                      sum += parseInt(this.state.black.one)
                      break;
                    case 2:
                      sum += parseInt(this.state.black.two)
                      break;
                    case 3:
                      sum += parseInt(this.state.black.three)
                      break;
                    case 4:
                      sum += parseInt(this.state.black.four)
                      break;
                    case 5:
                      sum += parseInt(this.state.black.five)
                      break;
                    case 6:
                      sum += parseInt(this.state.black.six)
                      break;
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
 
    outcomeKeys = outcomeKeys.reverse()
    return {outcomeKeys, outcomes};
  };

  render () {
    const {outcomeKeys, outcomes} = this.computeOutcomes();
    const displayOutcomes = _.map(outcomeKeys, (v, i) => {
      return <tr key={i}>
        <th>{v}</th>
        <td>{(outcomes['0'][v]/77.76).toFixed(2) || '-'}</td>
        <td>{(outcomes['1'][v]/77.76).toFixed(2) || '-'}</td>
        <td>{(outcomes['2'][v]/77.76).toFixed(2) || '-'}</td>
        <td>{(outcomes['3'][v]/77.76).toFixed(2) || '-'}</td>
        <td>{(outcomes['4'][v]/77.76).toFixed(2) || '-'}</td>
        <td>{(outcomes['5'][v]/77.76).toFixed(2) || '-'}</td>
      </tr>
    });

    return (
      <div>
        <link rel="stylesheet" 
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
          crossOrigin="anonymous"/>
        
        <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"/>

        <link rel="stylesheet"
          href="file:///Users/agreenspan/Apps/dice/src/pages/style.css"/>
        

        <Container fluid={true} style={{paddingTop: 20}}>
          <Row>
            <Col sm='3'>
              <Row>
                <Col sm='6'>
                  <label>Black:</label> 
                  <br/>
                  <i className='fa fa-dice-one'/>
                  <input type='number'
                    name='black.one'
                    value={this.state.black.one}
                    onChange={this.handleChange}
                    min={-5} max={-1}
                    />
                  <br/>
                  <i className='fa fa-dice-two'/>
                  <input type='number'
                    name='black.two'
                    value={this.state.black.two}
                    onChange={this.handleChange}
                    min={-5} max={0}
                    />
                  <br/>
                  <i className='fa fa-dice-three'/>
                  <input type='number'
                    name='black.three'
                    value={this.state.black.three}
                    onChange={this.handleChange}
                    min={-2} max={2}
                    />
                  <br/>
                  <i className='fa fa-dice-four'/>
                  <input type='number'
                    name='black.four'
                    value={this.state.black.four}
                    onChange={this.handleChange}
                    min={2} max={2}
                    />
                  <br/>
                  <i className='fa fa-dice-five'/>
                  <input type='number'
                    name='black.five'
                    value={this.state.black.five}
                    onChange={this.handleChange}
                    min={0} max={5}
                    />
                  <br/>
                  <i className='fa fa-dice-six'/>
                  <input type='number'
                    name='black.six'
                    value={this.state.black.six}
                    onChange={this.handleChange}
                    min={1} max={5}
                    />
                </Col>
                <Col sm='6'>
                  <label>White: </label> 
                  <br/>
                  <i className='fa fa-dice-one' style={{ color: 'white', backgroundColor: 'black'}}/>
                  <input type='number'
                    name='white.one'
                    value={this.state.white.one}
                    onChange={this.handleChange}
                    min={-5} max={-1}
                    />
                  <br/>
                  2
                  <input type='number'
                    name='white.two'
                    value={this.state.white.two}
                    onChange={this.handleChange}
                    min={-5} max={0}
                    />
                  <br/>
                  3
                  <input type='number'
                    name='white.three'
                    value={this.state.white.three}
                    onChange={this.handleChange}
                    min={-2} max={2}
                    />
                  <br/>
                  4
                  <input type='number'
                    name='white.four'
                    value={this.state.white.four}
                    onChange={this.handleChange}
                    min={2} max={2}
                    />
                  <br/>
                  5
                  <input type='number'
                    name='white.five'
                    value={this.state.white.five}
                    onChange={this.handleChange}
                    min={0} max={5}
                    />
                  <br/>
                  6
                  <input type='number'
                    name='white.six'
                    value={this.state.white.six}
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



import React from 'react';
import './Return.css';
class Returns extends React.Component {
  state = {
    amount: '1',
    duration: '1',
    rate: '5',
    returns: ''
  };
  setAmount = e => {
    this.setState({ amount: e.target.value });
    this.calculateReturn();
  };
  setDuration = e => {
    this.setState({ duration: e.target.value });
    this.calculateReturn();
  };
  setRate = e => {
    this.setState({ rate: e.target.value });
    this.calculateReturn();
  };

  calculateReturn = () => {
    const { amount, duration, rate } = this.state;
    const returns = +amount * 1000 + (+amount * 1000 * +duration * +rate) / 100;
    this.setState({ returns });
  };

  render() {
    let { amount, duration, rate, returns } = this.state;
    return (
      <React.Fragment>
        <div className='card'>
          <div className='container'>
            Investment Amount
            <div>
              <input
                type='range'
                min='1'
                value={+amount}
                onChange={this.setAmount}
                className='slider'
              />
            </div>
            <div>{amount} K</div>
          </div>
          <div className='container'>
            Investment duration
            <div>
              <input
                type='range'
                min='1'
                max='30'
                value={duration}
                onChange={this.setDuration}
                className='slider'
              />
            </div>
            <div>
              {duration} {duration === '1' ? 'Yr' : 'Yrs'}
            </div>
          </div>

          <div className='container'>
            Rate of Interest
            <div>
              <input
                type='range'
                min='5'
                max='22'
                value={rate}
                onChange={this.setRate}
                className='slider'
              />
            </div>
            <div>{rate + ' %'}</div>
            <button onClick={this.calculateReturn}>Calculate Returns</button>
            <div>
              {returns &&
                `Your returns on ${amount *
                  1000}  for ${duration} years at ${rate}% is \u20B9 ${returns}`}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Returns;

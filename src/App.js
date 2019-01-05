import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button';
import Text from './Components/Text';
import { connect } from 'react-redux';
import setName from './Actions/UserActions';

class App extends Component {
  render() {
    func=()=>console.log("helloworld");
  //  console.log(this.props.user);
    return (
      <div className="App">
        <Button changeText={() => this.props.setName("helloWorld")} />
        <Text abc={this.UNSAFE_componentWillMount.func()}/>
        {/* { <Text getText={this.props.user.name1} />} */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
//  console.log(state.user);
  return({ user: state.user });
    };

const mapDispatchToProps = (dispatch) => ({ setName: (name1) => { dispatch(setName(name1))} });

export default connect(mapStateToProps, mapDispatchToProps)(App);

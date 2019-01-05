import React from 'react';
import { connect } from 'react-redux';
import setName from '../../Actions/UserActions/';

class Text extends React.Component {
        render() {
                return (
                        <div>
                                <h1>my name is {this.props.user.name1}</h1>
                        </div>
                )
        }
}
const mapStateToProps = (state) => {
        return({ user: state.user })
};

const mapDispatchToProps = (dispatch) => ({ setName: (name1) => { dispatch(setName(name1)) } })

export default connect(mapStateToProps, mapDispatchToProps)(Text);
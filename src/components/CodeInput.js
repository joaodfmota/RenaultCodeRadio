import React from 'react';
import { Component, TextInput, Styles, Button } from 'reactxp';

export default class CodeInput extends Component{
  constructor(props) {
    super(props);
    this.state = {
      securityCode: '',
    };
  }

  render() {
    return (
      <div style={_styles.container} ref="codeInputArea">
        <div style={_styles.error} ref="errorArea">
          Ops, your code seens to be invalid. 
          Click <strong style={_styles.errorMore} ref="errorMore">HERE</strong> to learn more.
        </div>
        <TextInput 
          placeholder="Enter your security code here..." 
          style={_styles.inputCode} 
          maxLength="4" 
          onChangeText={ this._onChangeSecurityCode }
          autoFocus={true}
          onKeyPress={this._handleKeyPress} />
        <div style={_styles.inputHelper} ref="inputHelper">press [ENTER] or</div>
        <Button 
          style={_styles.submitCode} 
          ref="submitCode"
          onPress={ this._submitCode }>
          Search
        </Button>
      </div>
    );
  }

  _submitCode = (value) => {
    if(this.state.securityCode.length === 4) {
      this._saveCode();
    }
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if(this.state.securityCode.length === 4) {
        this._saveCode();
      }
    }
  }

  _saveCode = () => {
    this._securityCode = this.state.securityCode;
    if(this._securityCode.match(/[a-z]/i)) {
      this.refs.errorArea.style.display = "none";
      this.props.setCode(this.state.securityCode);
    } else {
      this.refs.errorArea.style.display = "block";
    }
  }

  _onChangeSecurityCode = (newValue) => {
    if(newValue.length === 4) {
      this.setState({securityCode: newValue});
      this.refs.inputHelper.style.opacity = "1";
      this.refs.submitCode.props.style.backgroundColor = "#FFDE00";
      this.refs.submitCode.props.style.color = "#262626";
      this.refs.submitCode.props.style.pointerEvents = "auto";
    } else {
      this.setState({securityCode: ''});
      this.refs.inputHelper.style.opacity = "0";
      this.refs.submitCode.props.style.backgroundColor = "rgb(237, 237, 239)";
      this.refs.submitCode.props.style.color = "#fff";
      this.refs.submitCode.props.style.pointerEvents = "none";
    }
  }
}

const _styles = {
  container: Styles.createViewStyle({
    position: 'relative',
    zIndex: 1,
    background: '#fff',
    display: 'block',
    borderRadius: '4px',
    width: '100%',
    maxWidth: '700px',
    margin: 'auto',
  }),
  inputCode: Styles.createTextInputStyle({
    backgroundColor: 'transparent',
    boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.1)',    
    color: '#686767',
    border: 'none',
    font: 'inherit',
    fontSize: '14px',
    height: '70px',
    lineHeight: '70px',
    marginLeft: 0,
    outline: 'none',
    overflow: 'hidden',
    paddingLeft: '30px',
    paddingRight: '175px',
    transition: 'all 0.3s ease',
    width: '100%',
    whiteSpace: 'nowrap',
  }),
  submitCode: Styles.createViewStyle({
    position: 'absolute',
    height: '50px',
    padding: '0 30px',
    top: '10px',
    right: '10px',
    color: '#fff',
    fontSize: '12px',
    letterSpacing: '0.5px',
    lineHeight: 50,
    textTransform: 'uppercase',
    background: '#EDEDEF',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
    overflow: 'visible',
  }),
  inputHelper: Styles.createViewStyle({
    opacity: 0,
    position: 'absolute',
    right: '130px',
    top: '30px',
    color: '#262626',
    whiteSpace: 'nowrap',
    fontSize: '10px',
    marginRight: '5px',
    pointerEvents: 'none',
    transition: 'all 0.3s ease',
  }),
  error: Styles.createViewStyle({
    position: 'absolute',
    top: '-30px',
    display: 'none',
    color: '#fff'
  }),
  errorMore: Styles.createViewStyle({
    color: '#FFDE00',
    cursor: 'pointer'
  })
};
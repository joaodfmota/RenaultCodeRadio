import React from 'react';
import { Component, TextInput, Styles, Button } from 'reactxp';

export default class ResultArea extends Component{
  constructor(props) {
    super(props);
    this._locateCode = this._locateCode.bind(this);
    this.state = {
      firstChar: '',
      code: ''
    };
  }

  componentWillMount() {
    var firstChar = this.props.getCode().charAt(0);
    this.setState({firstChar: firstChar}, () => {
      this._locateCode(firstChar);
    });
  }

  render() {
    return (
      <div style={_styles.container}>
        <div ref="resultArea">
          Your code is: <br/>
          <span style={_styles.code}>{this.state.code}</span>
        </div>
        <div style={_styles.error} ref="errorArea">
          Ops, we can't find your code. <br/>
          ☹️
        </div>
      </div>
    );
  }


  _locateCode = (firstChar) => {

    _getFile = (file) => {
      return require("../data/"+file.toLowerCase()+".json");
    }

    try {
      var data = _getFile(firstChar);
      for(key in data){
        if(this.props.getCode().toUpperCase() === key) {
          this.setState({code: data[key]}, () => {
            this._locateCode(firstChar);
            return true;
          });
        }
      }
    } catch(err) {
      this.refs.errorArea.props.style.display = "block";
      this.refs.resultArea.props.style.display = "none";
    }
  }
}

const _styles = {
  container: Styles.createViewStyle({
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    display: 'block',
    borderRadius: '4px',
    width: '100%',
    maxWidth: '700px',
    margin: 'auto',
    color: '#FFF',
    fontSize: '36px'
  }),
  code: Styles.createViewStyle({
    color: '#FFDE00',
    fontSize: '48px'
  }),
  error: Styles.createViewStyle({
    display: 'none'
  })
};
import React from 'react';
import { Component, TextInput, Styles, Button, Text } from 'reactxp';

export default class ResultArea extends Component {
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
          <Text>
            Your code is:<br/>
          </Text>
          <span style={_styles.code}>{this.state.code}</span> <br/><br/>
          <Text style={_styles.voteResultHelper}>
            Worked?
          </Text>
          <div style={_styles.voteResult}>
            <Button>
              <Text style={_styles.voteIcon}>
                👍
              </Text>
            </Button>
            <Button>
              <Text style={_styles.voteIcon}>
                👎
              </Text>
            </Button>
          </div>
          <Button onPress={ this.props.onNavigateBack }>
              <Text>
                  Go Back
              </Text>
          </Button>
        </div>
        <div style={_styles.error} ref="errorArea">
          Ops, we can't find your code.<br/>
          ☹️
        </div>
      </div>
    );
  }

  _saveCode = (code) => {
    this.setState({code: code});
  }

  _locateCode = (firstChar) => {

    _getFile = (file) => {
      return require("../data/"+file.toLowerCase()+".json");
    }

    try {
      var data = _getFile(firstChar);
      if(data.hasOwnProperty(this.props.getCode().toUpperCase())){
        this._saveCode(data[this.props.getCode().toUpperCase()]);
      } else {
        this.refs.errorArea.style.display = "block";
        this.refs.resultArea.style.display = "none";
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
  }),
  voteResult: Styles.createViewStyle({
    display: 'flex',
    justifyContent: 'center'
  }),
  voteIcon: Styles.createTextStyle({
    fontSize: '3rem'
  }),
  voteResultHelper: Styles.createTextStyle({
    fontSize: '2rem'
  })
};
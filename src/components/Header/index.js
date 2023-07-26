import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

function HOC(ComponentHeader) {
  return class Component extends React.Component {
    render() {
      return(
        <ThemeContext.Consumer>
        {(value) => (
          <ComponentHeader {...value} />
        )}
      </ThemeContext.Consumer>
      )
    }
  }
}

class Header extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.theme !== prevProps.theme) {
      console.log('theme is changed')
    }
  }

  render(){
    return (
        <Container>
          <h1>TaskListener</h1>
          <button 
            type="button" 
            onClick={this.props.handleToggleTheme}
            >
              {this.props.theme === 'dark' ? '🌚' : '🌞'}
          </button>
        </Container>
    );
  }
}

export default HOC(Header);
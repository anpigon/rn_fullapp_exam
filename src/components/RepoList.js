import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Spinner, List, ListItem, Icon } from 'native-base';
import { getRepos, getRepoThunk, repoSelected } from '../actions/index';

class RepoList extends Component {

  componentWillMount() {
    this.props.getRepoThunk();
	}
	
  render() {
		console.log(this.props)
    if( !this.props.repos || this.props.repos.length === 0 ) {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress= {() => Actions.pop()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Repo List</Title>
            </Body>
            <Right />
          </Header>
          <Content >
            <Text>Loading your repo List, Please wait</Text>
            <Spinner />
          </Content>
        </Container>
      );
    }
		else 
		{
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress= {()=>Actions.pop()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>GitHub Repo List</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <List dataArray={this.props.repos}
              renderRow={(item) =>
              <ListItem onPress={() => { Actions.RepoInfo();
                this.props.repoSelected(item)}}>
                <Text>{item.full_name}</Text>
              </ListItem>}>
            </List>
          </Content>
        </Container>
      );
    }
  }
}

function mapStateToProps(state) {
	console.log(state)
  return {
    repos: state.repos
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getRepos: getRepos,
    getRepoThunk: getRepoThunk,
    repoSelected: repoSelected
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(RepoList);
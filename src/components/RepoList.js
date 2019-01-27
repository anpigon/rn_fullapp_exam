import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Button, Spinner, List, ListItem, Icon } from 'native-base';
import { getRepos, getRepoThunk, repoSelected } from '../actions/index';

class RepoList extends Component {

  componentWillMount() {
    this.props.getRepoThunk();
	}
	
  render() {
		return (
			<Container>
				<Content>
					{
						( this.props.repos && this.props.repos.length > 0 ) ?
						<List dataArray={this.props.repos}
              renderRow={(item) =>
              <ListItem onPress={() => { Actions.RepoInfo();
                this.props.repoSelected(item)}}>
                <Text>{item.full_name}</Text>
              </ListItem>}>
            </List>
						:
						<>
							<Text>Loading your repo List, Please wait</Text>
							<Spinner />
						</>
					}
				</Content>
			</Container>
		);
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
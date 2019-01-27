import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Text, Button, List, ListItem } from 'native-base';

class RepoInfo extends Component {
  render() {
    return(
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>{this.props.activeRepo.full_name}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.activeRepo.description}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.activeRepo.id}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.activeRepo.owner.login}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.activeRepo.url}</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state){
	console.log('RepoInfo', state)
  return {
    activeRepo: state.activeRepo
	};
}
	
export default connect(mapStateToProps)(RepoInfo);
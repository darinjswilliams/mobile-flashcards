import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, KeyboardAvoidingView, View, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { createCard } from '../actions'
import { saveCard } from '../utils/api'
import { whitesmoke, gray} from '../utils/colors'

class AddCardView extends Component {
    state = {
        question: '',
        answer: ''
    };

    handleSubmit = () => {
        const deckId = this.props.navigation.getParam('deckId');
        const { question, answer } = this.state;
                
        this.props.createCard(deckId, question, answer);
        saveCard(deckId, { question, answer });

        this.props.navigation.goBack(); 

        this.setState({
            question: '',
            answer: ''
        });
    }

    render() {
        const { question, answer } = this.state;
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.element}>                    
                    <Text style={styles.label}>What's the question?</Text>
                    <TextInput
                        placeholder='Enter your question'
                        style={styles.input}
                        onChangeText={question => this.setState({ question })}
                        value={question} />
                </View>
                <View style={styles.element}>
                    <Text style={styles.label}>What's the Answer?</Text>
                    <TextInput
                        placeholder='Enter your Answer'
                        style={styles.input}
                        onChangeText={answer => this.setState({ answer })}
                        value={answer} />
                </View>
                <TextButton onPress={this.handleSubmit}
                    disabled={!(question !== '' && answer !== '')}
                >
                    <Text>Create Card</Text>
                </TextButton>
            </KeyboardAvoidingView>

        );
    }

}

const mapDispatchToProps = dispatch => ({
    createCard: (deckId, question, answer) =>
      dispatch(createCard(deckId, question, answer))
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    element: {
      margin: 5
    },
    label: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    input: {
      backgroundColor: whitesmoke,
      width: 350,
      fontSize: 20,
      height: 50,
      padding: 10,
      borderWidth: 1,
      borderColor: gray,
      margin: 20
    }
  });

export default connect(null,mapDispatchToProps)(AddCardView);

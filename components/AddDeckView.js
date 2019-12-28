import React, { Component } from 'react'
import { Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { whitesmoke, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { createDeck } from '../actions'
import { generateId } from '../utils/helpers'
import { saveDeck } from '../utils/api'

class AddDeckView extends Component {
    state = {
        input: ''
    };

    handleChange = (input) => {
        this.setState(() => ({
            input
        }));
    }

    handleSubmit = () => {
        deck = {
            id: generateId(),
            name: this.state.input,
            cards: [],
        }
        this.props.createDeck(deck.id, deck.name);
        saveDeck(deck);


        this.props.navigation.navigate('Deck', {
            deckId: deck.id,
            name: deck.name
        });

        this.setState(() => ({
            input: ''
        }));

    }

    render() {
        const { input } = this.state;

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.label}>What is the title of new deck?</Text>
                <TextInput
                    style={styles.input}
                    value={input}
                    placeholder='Deck Title'
                    onChangeText={this.handleChange}
                />
                <TextButton onPress={this.handleSubmit}
                    disabled={input === ''}
                >
                    <Text>Create Deck</Text>
                </TextButton>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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

const mapDispatchToProps = dispatch => ({
    createDeck: (id, deckName) => dispatch(createDeck(id, deckName))
});

export default connect(null, mapDispatchToProps)(AddDeckView);
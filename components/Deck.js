import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { green, gray, white, red } from '../utils/colors'
import { deleteDeck } from '../actions'
import { removeDeck } from '../utils/api'
import { GetSingularOrPlural } from '../utils/helpers'

class Deck extends Component {

    handleDelete = (navigation, deckId) => {
        this.props.deleteDeck(deckId);
        removeDeck(deckId, navigation)

    }

    render() {
        const { deck, navigation } = this.props;
        if (deck == null || deck === 'undefined') {
            return (
                <View>
                </View>
            );
        }
        else {
            return (

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.name}>{deck.name}</Text>
                        <Text style={styles.count}>{`${deck.cards.length}`} {`${GetSingularOrPlural(deck.cards.length)}`}</Text>
                    </View>
                    <View style={styles.actions}>
                        {deck.cards.length !== 0 && (
                            <TextButton
                                onPress={() => {
                                    navigation.navigate('Quiz', { deck });
                                }}
                            >
                                <Text>Start Quiz</Text>
                            </TextButton>
                        )}
                        <TextButton
                            onPress={() => {
                                navigation.navigate('AddCard', { deckId: deck.id });
                            }}
                        ><Text>Add Card</Text></TextButton>
                        <TextButton
                            style={{ backgroundColor: red }}
                            onPress={() => {
                                this.handleDelete(navigation, deck.id);
                            }}
                        ><Text>Delete Deck</Text></TextButton>
                    </View>
                </View>

            );
        }
    }
}

const mapStateToProps = (state, { navigation }) => ({
    deck: state[navigation.getParam('deckId')]
})

const mapDispatchToProps = dispatch => ({
    deleteDeck: (deckId) => dispatch(deleteDeck(deckId))
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        marginBottom: 5
    },
    count: {
        fontSize: 20,
        color: gray,
        textAlign: 'center',
        marginBottom: 5
    },
    actions: {
        marginTop: 20
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
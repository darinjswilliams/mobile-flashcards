import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveDecks } from '../utils/api'
import { GetSingularOrPlural } from '../utils/helpers'
import { receiveDecks } from '../actions'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { white, blue, gray, purple } from '../utils/colors'
import { NavigationEvents } from 'react-navigation'

class DeckListView extends Component {
    state = {
        loadingComplete: false
    };

    handleWillFocus() {

        this.setState(() => ({
            loadingComplete: false
        }));

    retrieveDecks()
        .then(decks => this.props.receiveDecks(decks))
        .then(() => {
            this.setState({ loadingComplete: true });
        });
    }

    render() {
        const { decks, navigation } = this.props;

        if (!this.state.loadingComplete) {
            return (
                <View style={styles.blank}>
                    <Text style={styles.loading}>Loading Decks..</Text>
                    <NavigationEvents
                        onWillFocus={payload => this.handleWillFocus()}
                    />
                </View>
            );
        }
        else {
            return Object.values(decks).length > 0 ? (
                <View style={styles.container}>
                    <NavigationEvents
                        onWillFocus={payload => this.handleWillFocus()}
                    />

                    <Text style={styles.loading} >Decks List</Text>
                    <FlatList

                        data={Object.values(decks)}
                        keyExtractor={(item, index) => item.name}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={[styles.listContainer, (index % 2) == 0 ? styles.evenItem : styles.oddItem]}
                                onPress={() => navigation.navigate('Deck', { deckId: item.id, name: item.name })}
                            >
                                <Text style={[styles.name, index % 2 == 0 ? styles.evenItem : styles.oddItem]} >{item.name}</Text>
                                <Text style={[styles.count, index % 2 == 0 ? styles.evenItem : styles.oddItem]} >{`${item.cards.length}`} {`${GetSingularOrPlural(item.cards.length)}`}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            ) :
                (
                    <View style={styles.blank}>
                        <Text style={{ fontSize: 20 }}>You don't have any decks.</Text>
                        <Text style={{ fontSize: 20 }}>Click on Add Deck to add the same.</Text>
                    </View>
                );
        }

    }

}


const mapStateToProps = (decks) => ({
    decks
});

const mapDispatchToProps = dispatch => ({
    receiveDecks: decks => dispatch(receiveDecks(decks))
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start'
    },
    blank: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    listContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: white,
        minHeight: 100,
        marginBottom: 10,
        padding: 20,
        borderWidth: 2,
        borderColor: blue
    },
    evenItem: {
        backgroundColor: purple,
        color: white
    },
    oddItem: {
        backgroundColor: white,
        color: purple
    },
    name: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 5
    },
    count: {
        fontSize: 20,
        textAlign: 'center',
        color: gray,
        marginBottom: 5
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView);



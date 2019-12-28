import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import TextButton from './TextButton'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { blue, white, red, green, purple } from '../utils/colors'
import { ProgressBarAndroid } from 'react-native'

const initialState = {
    showQuestion: true,
    showResult: false,
    trueCounter: 0,
    index: 0,
    progressValue: 0
};

class QuizView extends Component {
    state = initialState;

    restartQuiz = () => {
        this.setState(initialState);
    };

    handleButtonPress = () => {
        const { showQuestion } = this.state
        this.setState({
            showQuestion: !showQuestion
        });
    }

    stopProgress = () => {
        clearInterval(this.timerValue);
    }

    startProgress = (localTrueCounter) => {

        const resultPercent = localTrueCounter / this.props.deck.cards.length;        

        if (resultPercent > 0) {
            this.timerValue = setInterval(() => {        
                if (this.state.progressValue <= resultPercent) {
                    this.setState({ progressValue: this.state.progressValue + .03 })
                }
                else {
                    this.setState({ progressValue:resultPercent});
                    this.stopProgress();
                }
            }, 1);
        }
    }

    handleTrueOrFalse = (clickedButton, length) => {

        const { trueCounter, index } = this.state;
        const localTrueCounter=clickedButton === 'trueButton' ? trueCounter + 1 : trueCounter;
        if ((index + 1) === length) {
            this.setState({
                showResult: true,
                trueCounter: localTrueCounter 
            })
            clearLocalNotification();
            setLocalNotification();
            this.startProgress(localTrueCounter);
        }
        else {
            this.setState({
                showQuestion: true,
                trueCounter: localTrueCounter,
                index: index + 1
            });
        }
    }


    render() {
        const { deck } = this.props;
        const { showQuestion, showResult, index, progressValue } = this.state
        
        
        return (
            <View style={styles.thirdContainer}>
                {!showResult && (
                    <View style={styles.container}>
                        <View>
                            {showQuestion ?
                                <Text style={styles.text}>Q ({index + 1} of {deck.cards.length}): {deck.cards[index].question}</Text>
                                : <Text style={styles.text}>Answer: {deck.cards[index].answer}</Text>

                            }
                        </View>

                        <View style={{ marginTop: 30 }}>

                            <TextButton onPress={this.handleButtonPress}>
                                {showQuestion ? <Text>Show Answer</Text> : <Text>Show Question</Text>}
                            </TextButton>

                        </View>

                    </View>
                )}
                {!showResult && (
                    <View style={styles.secondContainer}>
                        <Text style={styles.heading}>How did you performed in this question?</Text>
                        <View style={styles.actions}>
                            <TouchableOpacity
                                style={[styles.answerBtn, { backgroundColor: green }]}
                                onPress={() => this.handleTrueOrFalse('trueButton', deck.cards.length)}>
                                <Text style={styles.btnText}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.handleTrueOrFalse('falseButton', deck.cards.length)}
                                style={[styles.answerBtn, { backgroundColor: red }]}>
                                <Text style={styles.btnText}>Incorrect</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                {
                    showResult && (
                        <View style={styles.thirdContainer}>                            
                            <ProgressBarAndroid styleAttr='Horizontal' style={styles.progressbar} progress={progressValue} indeterminate={false}>                                
                            </ProgressBarAndroid >

                            <Text style={styles.heading}> Showing result </Text>
                            <Text style={styles.result}> {(progressValue*100).toFixed(2)}%</Text>
                            <View style={styles.resultActions}>
                                <TextButton
                                    onPress={() => this.restartQuiz()}
                                >Restart Quiz
                            </TextButton>
                                <TextButton
                                    onPress={() => this.props.navigation.goBack()}
                                >Back To Deck
                            </TextButton>
                            </View>
                        </View>
                    )
                }
            </View>
        );
    }
}


function mapStateToProps(state, { navigation }) {

    return {
        deck: navigation.getParam('deck')
    }
}

const styles = StyleSheet.create({
    progressbar: {
        width: 300,
        transform: [{ scaleX: 1.0 }, { scaleY: 3.5 }],
        marginBottom: 40
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: blue,
        padding: 30,
        width: 350,
        height: 250,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 4,
            height: 5
        }
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: white
    },
    secondContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    answerBtn: {
        padding: 20,
        margin: 10,
        width: 150,
        borderRadius: 5
    },
    btnText: {
        color: white,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    thirdContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white
    },
    result: {
        fontSize: 70,
        color: purple,
        textAlign: 'center'
    },
    resultActions: {
        marginTop: 50
    }

});

export default connect(mapStateToProps, null)(QuizView);
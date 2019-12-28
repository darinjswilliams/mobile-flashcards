import React, { Component } from 'react'
import { View, Text, } from 'react-native'
import { Button } from 'react-native-elements';
import Card from './cardView'


class quizView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            index: 0,
            total: 0,
            score: 0
        }
    }


    componentDidMount() {
        const cards = this.props.navigation.getParam('cards', [])
        this.setState({ cards, total: cards.length })
    }

    pressCorrect = () => {
        const newIndex = this.state.index < this.state.total ? this.state.index + 1 : this.state.index

        this.setState({ index: newIndex, score: this.state.score + 1 })
    }

    pressIncorrect = () => {
        const newIndex = this.state.index < this.state.total ? this.state.index + 1 : this.state.index
        this.setState({ index: newIndex, })
    }

    pressBack = () => {
        const title = this.props.navigation.getParam('title', 'no-title')
        this.props.navigation.navigate('DECK', { title })

    }

    display = () => { // display the next card (question/answer) when ever the buttons are clicked
        const { cards, index } = this.state
        const card = cards[index]
        const { answer, question } = card !== undefined ? card : { answer: '', question: '' }
        return <Card answer={answer} question={question} />
    }

    render() {
        const { index, total, score } = this.state
        return <View style={{ flex: 1 }}>
            {
                this.state.total > index ? <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Question {index + 1} out of {total}</Text>

                    <View style={{ marginTop: 0, width: "90%", height: 400, }}>
                        {this.display()}
                    </View>

                    <View style={{ width: "50%", marginTop: 50, height: 20 }}>
                        <Button type="solid" title="Correct" color="green" onPress={this.pressCorrect} />
                    </View>
                    <View style={{ width: "50%", marginTop: 30, height: 20 }}>
                        <Button type="solid" title="Incorrect" color="red" onPress={this.pressIncorrect} />
                    </View>
                </View> : <View style={{ marginTop: 150, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18 }}>Your score is : {this.state.score} </Text>
                        <Text style={{ marginBottom: 5, fontSize: 18 }}>Correct answers : {score !== 0 ? `% ${Number(100 * (score / total)).toFixed(2)}` : 0} </Text>
                        
                        <View style={{ marginTop: 18 }}>
                            <Button type="outline" style={{ marginBottom: 5 }} title="Restart Quiz" color="blue" onPress={() => this.setState({ index: 0, score: 0 })} />
                        </View>

                        <View style={{ marginTop: 10,marginBottom:20 }}>
                            <Button type="outline" style={{ marginBottom: 5 }} title="Back to Deck" color="blue" onPress={this.pressBack} />
                        </View>

                    </View>
            }

        </View>
    }
}

export default quizView
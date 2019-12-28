import { CREATE_DECK, RECEIVE_DECKS, CREATE_CARD, DELETE_DECK } from '../actions'

const initialState = null;

const decks = (state = initialState, action) => {
    
    switch (action.type) {
        case CREATE_DECK:
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    name: action.name,
                    cards: [],
                }
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case CREATE_CARD:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    cards: [
                        ...state[action.deckId].cards,
                        { question: action.question, answer: action.answer }
                    ]
                }
            }
        case DELETE_DECK:
            delete state[action.deckId];
            return state;

        default:
            return state;
    }
}


export default decks;
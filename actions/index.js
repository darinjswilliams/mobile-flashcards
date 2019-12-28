export const CREATE_DECK = 'CREATE_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const CREATE_CARD = 'CREATE_CARD'
export const DELETE_DECK = 'DELETE_DECK'

export const createDeck = (id, name) => ({
    type: CREATE_DECK,
    id,
    name,
})

export const receiveDecks = (decks) => ({
    type: RECEIVE_DECKS,
    decks,
})

export const createCard = (deckId, question, answer) => ({
    type: CREATE_CARD,
    deckId,
    question,
    answer,
})


export const deleteDeck = (deckId) => ({
    type: DELETE_DECK,
    deckId,
}) 
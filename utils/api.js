import { AsyncStorage } from 'react-native'
export const UDACICARDS_STORAGE_KEY = "UdaciCards:FlashCards";

export const saveDeck = (deck) => {

    return AsyncStorage.mergeItem(
        UDACICARDS_STORAGE_KEY,
        JSON.stringify({ [deck.id]: deck })
    )
}

export const retrieveDecks = () => {

    return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY).then(
        results => {
            const data = JSON.parse(results);
            return data;
        })
}

export const saveCard = (deckId, card) => {
    return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY).then(results => {
        const data = JSON.parse(results);
        data[deckId] = {
            ...data[deckId],
            cards: [
                ...data[deckId].cards,
                { question: card.question, answer: card.answer }
            ]
        };
        AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(data));
    });
}

export const removeDeck = (deckId, navigation) => {

    return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY).then(results => {
        const data = JSON.parse(results);

        delete data[deckId];

        AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(data)).then
            (navigation.navigate("Home"));

    });

}
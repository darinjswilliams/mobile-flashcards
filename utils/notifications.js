import { AsyncStorage } from 'react-native'
import { Notifications,  } from 'expo'
import * as Permissions from 'expo-permissions';

const NOTIFICATIONS_KEY = 'FLASHCARDS:NOTIFICATIONS'


export const clearLocalNotification = () => {
    AsyncStorage.removeItem(NOTIFICATIONS_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export const createNotification = () => {
    return {
        title: "Quiz reminder",
        body: "Don't forget to take a quiz !",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export const setNotification = () => {
    AsyncStorage.getItem(NOTIFICATIONS_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                    if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync()
                        let tomorrow = new Date()
                        tomorrow.setDate(tomorrow.getDate() + 1)
                        tomorrow.setHours(13)
                        tomorrow.setMinutes(14)
                        Notifications.scheduleLocalNotificationAsync(
                            createNotification(),
                            {
                                time: tomorrow,
                                repeat: 'day'
                            }
                        )

                        AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true))
                    }
                })
            }
        })
}
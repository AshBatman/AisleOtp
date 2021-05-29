import AsyncStorage from '@react-native-community/async-storage';

class Storage {
    async setItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) {
            console.warn(error)
        }
    }
    getItem = (key) => {
        return AsyncStorage.getItem(key);
    }
    removeItem = async (key) => {
        return await AsyncStorage.removeItem(key)
    }
}

export default new Storage()
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Retrieve record from the storage using the key
 *
 * @param {string} key
 */
export async function getAsyncStorage(key) {
    return await AsyncStorage.getItem(key);
}

/**
 * Store string record in the storage
 *
 * @param {string} key
 * @param {string} value
 */
export async function setAsyncStorage(key, value) {
    return await AsyncStorage.setItem(key, value);
}

/**
 * Store string record in the storage
 *
 * @param {string} key
 * @param {array | object} value
 */
export async function mergeAsyncStorage(key, value) {
    const val = JSON.stringify(value);
    return await AsyncStorage.mergeItem(key, val);
}

/**
 * Clear records from the storage using the key
 *
 * @param {string} key
 */
export async function clearAsyncStorage(key) {
    return await AsyncStorage.removeItem(key);
}


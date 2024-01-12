import { useEffect, useState } from 'react'

const PREFIX = 'guesswho-';

export default function useSessionStorage<T>(key: string, initialValue: T) {
    const prefixedKey: string = PREFIX + key;

    const [value, setValue] = useState(() => {
        const jsonValue = sessionStorage.getItem(prefixedKey);
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue;
        }
    })

    useEffect(() => {
        sessionStorage.setItem(prefixedKey, JSON.stringify(value))
    },[prefixedKey, value])
    return [value, setValue];
}
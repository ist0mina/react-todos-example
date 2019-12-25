export function requestEnhancer<T, K extends keyof T>(state: T, loading: K, error: K): T {
    return {
        ...state,
        [loading]: true,
        [error]: ''
    }
}

export function requestEnhancerWithDefault<T, K extends keyof T, U>(state: T, key: K, loading: K, error: K, defValue: U): T {
    return {
        ...requestEnhancer(state, loading, error),
        [key]: defValue        
    }
}

export function successEnhancer<T, K extends keyof T>(state: T, loading: K): T {
    return {
        ...state,
        [loading]: false        
    }
}

export function successEnhancerWithAnswer<T, K extends keyof T, U>(state: T, key: K, loading: K, answer: U): T {
    return {
        ...successEnhancer(state, loading),        
        [key]: answer
    }
}

export function failureEnhancer<T, K extends keyof T>(state: T, loading: K, error: K, answer: string): T {
    return {
        ...state,
        [loading]: false,
        [error]: answer
    }
}
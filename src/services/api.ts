interface IParams<T> {
    mockData: T[];
}

export function loadData<T, K extends IParams<T>> (params: K): Promise<T[]> {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(params.mockData); }, 1000);
    });
}
import { StateType, ActionType } from 'typesafe-actions';

declare module 'MyReduxTypes'{
    export type Store = StateType<typeof import('./index').default>;
    export type RootAction = ActionType<typeof import('./rootAction').default>;
    export type RootState = StateType<ReturnType<typeof import('./rootReducer').default>>;
}
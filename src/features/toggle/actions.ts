import { action } from 'typesafe-actions';
import { ToggleActionType, ToggleFieldType } from './types';

export const toggle = (field: ToggleFieldType) => action(ToggleActionType.TOGGLE, field);
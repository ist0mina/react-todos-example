import moment from 'moment';
import { STANDART_DATE_FORMAT } from '../const/formats';

export const formatDateTime = (date: Date, format = STANDART_DATE_FORMAT) => moment(date).format(format);
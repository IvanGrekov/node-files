import { getHours, getMinutes, getSeconds } from './date.utils.js';

export const getDateForLogger = () => {
    return `${+new Date()}: `;
};

export const logError = (error) => {
    console.error(getDateForLogger(), error);
};

export const logSuccess = (content) => {
    console.log(getDateForLogger(), content);
};

export const createFileNameInLogFormat = (date) => {
    const hours = getHours(date);
    const minutes = getMinutes(date);
    const seconds = getSeconds(date);

    return `app-${hours}_${minutes}_${seconds}.log`;
};

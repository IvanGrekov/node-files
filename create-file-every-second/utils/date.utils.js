export const getFormattedDateEntity = (entity) => {
    return entity < 10 ? `0${entity}` : entity;
};

export const getHours = (date) => {
    return getFormattedDateEntity(date.getHours());
};

export const getMinutes = (date) => {
    return getFormattedDateEntity(date.getMinutes());
};

export const getSeconds = (date) => {
    return getFormattedDateEntity(date.getSeconds());
};

export const TYPE_TEXT = 'TYPE_TEXT';

export const typeText = event => ({
    type: TYPE_TEXT,
    text: event.target.value
});

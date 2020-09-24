const CHANGE_INPUT = 'CHANGE_INPUT ';

function changeInput(value) {
    return {
        type: CHANGE_INPUT,
        value
    }
}

export {
    CHANGE_INPUT,
    changeInput
}
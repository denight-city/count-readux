export const IncrementAction = (data) => {
    return {
        type: "Increment",
        data
    }
};
export const decrementAction = (data) => {
    return {
        type: "Decrement",
        data
    }
}
export const resetNumberAction = (data) => {
    return {
        type: "resetNumber",
        data
    }
}
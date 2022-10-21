const initialState = {
    code: "1111",
    newCode: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "new code": {
            if (state.newCode.length < 4) {
                state.newCode += action.code
            }
            return state
        }
        case "delete code": {
            state.newCode = state.newCode.substring(0,state.newCode.length-1)
            return state
        }
        default: {
            return state
        }
    }
}

export default reducer;
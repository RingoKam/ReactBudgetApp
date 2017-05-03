const initialState = {
    0: {
        "category_id": 0,
        "amount": 1000
    },
    1: {
        "category_id": 1,
        "amount": 3000
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "":
            return state;
    }
    return state;
}
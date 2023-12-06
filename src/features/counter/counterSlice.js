// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";



// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState: { count: 0 },
//     reducers: {
//         increment: (state) => {
//             state.count = state.count + 1
//         },
//         decrement: (state) => {
//             state.count = state.count - 1
//         },

//         reset: (state) => {
//             state.count = 0
//         }
//     }
// })

// export const { increment, decrement, reset } = counterSlice.actions;


// export default counterSlice.reducer;

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        },
        incrementByValue: (state, action) => {
            state.count = state.count + action.payload;
        },
        reset: (state) => {
            state.count = 0
        }
    }

})
export const { increment, decrement, reset, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
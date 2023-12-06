// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// const store = configureStore({
//     reducer: {
//         counter: counterReducer
//     }
// })

// export default store;


const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store
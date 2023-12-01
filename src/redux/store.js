const { configureStore } = require("@reduxjs/toolkit");
const { default: ContactSlice } = require("./ContactSlice");


const store = configureStore({
    reducer:{
        contact : ContactSlice
    }
})

export default store
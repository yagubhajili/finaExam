import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: JSON.parse(localStorage.getItem('basket')) || [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],


}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setBasket: (state, action) => {
            let elemIndex = state.basket.findIndex(el => el._id == action.payload._id)
            if (elemIndex == -1) {
                state.basket = [...state.basket, { ...action.payload, count: 1 }]
            } else {
                state.basket[elemIndex].count++
            }
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        setWishlist: (state, action) => {
            let elemIndex = state.wishlist.findIndex(el => el._id == action.payload._id)
            if (elemIndex == -1) {
                state.wishlist = [...state.wishlist, { ...action.payload }]
            } else {
                state.wishlist = state.wishlist.filter(el => el._id != action.payload._id)
            }
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        },
        decreaseCount: (state, action) => {
            let elemIndex = state.basket.findIndex(el => el._id == action.payload._id)
            state.basket[elemIndex].count--
            if (action.payload.count <= 1) {
                state.basket = state.basket.filter(el => el._id != action.payload._id)
            }
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        removeFrombasket: (state, action) => {
            state.basket = state.basket.filter(el => el._id != action.payload._id)
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        removeAllFrombasket: (state, action) => {
            state.basket = []
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
    },
})

// Action creators are generated for each case reducer function
export const { setBasket, setWishlist, decreaseCount, removeFrombasket, removeAllFrombasket } = mainSlice.actions

export default mainSlice.reducer
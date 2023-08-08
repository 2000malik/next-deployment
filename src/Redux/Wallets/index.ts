import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { UserModel } from "../../Models/User";
import { WalletModel } from "../../Models/General";
import { getAllWallets } from "../../Api/General";


interface WalletState {
    wallets: WalletModel[]
}

const initialState: WalletState = {
    wallets: []
};

const walletsSlice = createSlice({
    name: "wallets",
    initialState,
    reducers: {
        resetWalletState: (state) => {
            return initialState;
        },
        setWallets: (state, action: PayloadAction<WalletModel[]>) => {
            state.wallets = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(updateWalletsAsync.fulfilled, (state, action) => {
            if (action.payload)
                state.wallets = action.payload as WalletModel[];
        })
    },
});

export const updateWalletsAsync = createAsyncThunk("updateWallets", async () => {
    try {
        const response = await getAllWallets();
        return response.data.data as WalletModel[];
    } catch (error) {

    }
})

export const { resetWalletState, setWallets } = walletsSlice.actions;
export default walletsSlice.reducer; 
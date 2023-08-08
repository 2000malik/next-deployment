import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { UserModel } from "../../Models/User";
import { BankModel, VirtualAccountModel, WalletModel } from "../../Models/General";
import { getAllBanks, getAllWallets, getVirtualAccountBalance } from "../../Api/General";


interface BanksState {
    banks: BankModel[]
}

const initialState: BanksState = {
    banks: []
};

const banksSlice = createSlice({
    name: "banks",
    initialState,
    reducers: {
        resetBankState: (state) => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateBanksAsync.fulfilled, (state, action) => {
            if (action.payload)
                state.banks = action.payload;
        })
    },
});

export const updateBanksAsync = createAsyncThunk("updateBanks", async () => {
    try {
        const response = await getAllBanks();
        return response.data.data;
    } catch (error) {

    }
})

export const { resetBankState } = banksSlice.actions;
export default banksSlice.reducer; 
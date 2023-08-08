import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { UserModel } from "../../Models/User";
import { VirtualAccountModel, WalletModel } from "../../Models/General";
import { getAllWallets, getVirtualAccountBalance } from "../../Api/General";


interface VirtualAccountState {
    account: VirtualAccountModel | null
}

const initialState: VirtualAccountState = {
    account: null
};

const virtualAccountSlice = createSlice({
    name: "virtualAccount",
    initialState,
    reducers: {
        resetVirtualAccountState: (state) => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateVirtualAccountAsync.fulfilled, (state, action) => {
            if (action.payload)
                state.account = action.payload;
        })
    },
});

export const updateVirtualAccountAsync = createAsyncThunk("updateVirtualAccount", async () => {
    try {
        const response = await getVirtualAccountBalance();
        return response.data.data;
    } catch (error) {

    }
})

export const { resetVirtualAccountState } = virtualAccountSlice.actions;
export default virtualAccountSlice.reducer; 
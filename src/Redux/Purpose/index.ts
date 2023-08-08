import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { UserModel } from "../../Models/User";
import { BankModel, VirtualAccountModel, WalletModel } from "../../Models/General";
import { getAllBanks, getAllWallets, getBeneficiaries, getPurposeCode, getVirtualAccountBalance } from "../../Api/General";
import { BeneficiariesModel } from "../../Models/Beneficiaries";


interface PurposeState {
    purposes: any[]
}

const initialState: PurposeState = {
    purposes: []
};

const purposeSlice = createSlice({
    name: "purpose",
    initialState,
    reducers: {
        resetPurposeState: (state) => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updatePurposesAsync.fulfilled, (state, action) => {
            if (action.payload)
                state.purposes = action.payload;
        })
    },
});

export const updatePurposesAsync = createAsyncThunk("updatePurposes", async () => {
    try {
        const response = await getPurposeCode();
        return response.data.data;
    } catch (error) {

    }
})

export const { resetPurposeState } = purposeSlice.actions;
export default purposeSlice.reducer; 
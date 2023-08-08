import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { UserModel } from "../../Models/User";
import { BankModel, VirtualAccountModel, WalletModel } from "../../Models/General";
import { getAllBanks, getAllWallets, getBeneficiaries, getVirtualAccountBalance } from "../../Api/General";
import { BeneficiariesModel } from "../../Models/Beneficiaries";


interface BeneficiariesState {
    beneficairies: BeneficiariesModel[]
}

const initialState: BeneficiariesState = {
    beneficairies: []
};

const beneficairySlice = createSlice({
    name: "beneficairies",
    initialState,
    reducers: {
        resetBeneficiaryState: (state) => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateBeneficiariesAsync.fulfilled, (state, action) => {
            if (action.payload)
                state.beneficairies = action.payload;
        })
    },
});

export const updateBeneficiariesAsync = createAsyncThunk("updateBeneficiaries", async () => {
    try {
        const response = await getBeneficiaries();
        return response.data.data;
    } catch (error) {

    }
})

export const { resetBeneficiaryState } = beneficairySlice.actions;
export default beneficairySlice.reducer; 
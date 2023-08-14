import { API_URL } from "@/utils";
import axios from "axios";

export const getUser = async (user_id: string) => axios.get(`${API_URL}/users/${user_id}`);
export const calculateFX = async (currency_from: string, currency_to: string) => axios.get(`${API_URL}/fx?currency_from=${currency_from}&currency_to=${currency_to}`);
export const getVirtualAccount = async () => axios.get(`${API_URL}/virtual-accounts`);
export const getVirtualAccountBalance = async () => axios.get(`${API_URL}/virtual-accounts/balance`);
export const getNameEnquiry = async (account_number: string, bank_code: string) => axios.get(`${API_URL}/name-enquiry?bank_code=${bank_code}&account_number=${account_number}`);
export const getAllBanks = async () => axios.get(`${API_URL}/banks`);
export const getAllWallets = async () => axios.get(`${API_URL}/wallets`);
export const creditWallet = async (walletId: number, amount: number, pin: string) => axios.post(`${API_URL}/wallets/${walletId}/credit`, { amount, pin });
export const withdrawWallet = async (walletId: number, amount: number, pin: string) => axios.post(`${API_URL}/wallets/${walletId}/withdraw`, { amount, pin });
export const convertFunds = async (from: number, to: number, amount: number, pin: string) => axios.post(`${API_URL}/fx`, { from_wallet_id: from, to_wallet_id: to, amount, pin });
export const createBeneficiary = async (data: any) => axios.post(`${API_URL}/beneficiaries`, data);
export const updateBeneficiary = async (data: any) => axios.put(`${API_URL}/beneficiaries/${data.id}`, data);
export const deleteBeneficiary = async (id: number) => axios.delete(`${API_URL}/beneficiaries/${id}`);
export const getBeneficiaries = async () => axios.get(`${API_URL}/beneficiaries`);
export const makeInternationTransfer = async (data: any) => axios.post(`${API_URL}/payments`, data);
export const makeLocalTransfer = async (walletId: number, data: any) => axios.post(`${API_URL}/wallets/${walletId}/transfer`, data);
export const getPurposeCode = async () => axios.get(`${API_URL}/purpose-codes`);
export const makeTransfer = async (data: any) => axios.post(`${API_URL}/virtual-accounts/transfer`, data);
export const getNGNTransactionHistory = async (page = 1, per_page = 20, start_date = "", end_date = "") => axios.get(`${API_URL}/virtual-accounts/transactions?page=${page}&per_page=${per_page}&start_date=${start_date}&end_date=${end_date}`);
export const getWalletTransactionHistory = async (data: any) => axios.get(`${API_URL}/transactions`,
    {
        params: {
            page: data.page,
            per_page: data.per_page,
            start_date: data.start_date,
            end_date: data.end_date,
            type: data.type,
            currency: data.currency,
        }
    });

export const verifyIdentity = async (data: any) => axios.post(`${API_URL}/identity-verification`, data,
    {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
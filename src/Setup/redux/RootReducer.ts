import { combineReducers } from 'redux';
import sidebarReducer from '../../Redux/Sidebar';
import authReducer from '../../Redux/Auth';
import walletsReducer from '../../Redux/Wallets';
import virtualWalletReducer from '../../Redux/VirtualWallet';
import banksReducer from '../../Redux/Banks';
import beneficiaryReducer from '../../Redux/Beneficiary';
import purposesReducer from '../../Redux/Purpose';



export const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    auth: authReducer,
    wallets: walletsReducer,
    virtualWallet: virtualWalletReducer,
    banks: banksReducer,
    beneficiaries: beneficiaryReducer,
    purposes: purposesReducer,

});
export type RootState = ReturnType<typeof rootReducer>;
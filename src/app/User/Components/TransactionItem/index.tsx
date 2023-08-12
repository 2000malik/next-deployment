import moment from "moment"
import { NGNTransactionHistoryModel, TransactionModel } from "../../../../models/transactions"
import { formatToCurrency, getIcon } from "../../../../Utils"
import { useAppSelector } from "../../../../Hooks"
import getSymbolFromCurrency from "currency-symbol-map"

export const NGNTransactionItem: React.FC<{ transaction: NGNTransactionHistoryModel }> = ({ transaction }) => {
    return (<div className="flex justify-between">
        <div className="flex gap-2 md:items-center">
            <div>
                {transaction.type == "DEBIT" ? <div className="md:w-[82px] md:h-[73px] w-[52px] h-[43px] rounded-xl bg-[#FFEDF3] flex  items-center justify-center text-lg">
                    <svg className="md:w-[34px] md:h-[34px] w-[15px] h-[15px]" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <g clipPath="url(#clip0_137_849)">
                            <path d="M17 33.9167V8.91675" stroke="#EC3662" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M26.9163 17L16.9997 7.08333L7.08301 17" stroke="#EC3662" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_137_849">
                                <rect width="34" height="34" fill="white" transform="matrix(1 0 0 -1 0 34)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div> :

                    <div className="md:w-[82px] md:h-[73px] w-[52px] h-[43px] rounded-xl bg-green-100 text-green-600 flex  items-center justify-center text-lg">
                        <svg className="rotate-180 md:w-[34px] md:h-[34px] w-[15px] h-[15px]" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <g clipPath="url(#clip0_137_849)">
                                <path d="M17 33.9167V8.91675" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M26.9163 17L16.9997 7.08333L7.08301 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_137_849">
                                    <rect width="34" height="34" fill="white" transform="matrix(1 0 0 -1 0 34)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>}
            </div>
            <div>
                <div className="text-lg font-semibold hidden md:block">
                    Transaction Reference {transaction.reference_number} <span className="capitalize">
                        ({transaction.beneficiary_name})
                    </span>
                </div>
                <div className="text-lg font-semibold md:hidden block">
                    Transaction To <span className="capitalize">
                        ({transaction.beneficiary_name})
                    </span>
                </div>
                <div className="text-lg font-semibold md:hidden block">
                    <div className="flex text-xl font-semibold items-center">
                        <span>
                            {transaction.type == "DEBIT" ? "-" : "+"}
                        </span>

                        <div className="text-xl font-semibold">{getSymbolFromCurrency("NGN")}</div>
                        <span>
                            {formatToCurrency((Number(transaction.amount) / 100))}
                        </span>
                    </div>
                </div>
                <div className="text-lg mt-2">
                    {
                        moment(transaction.transaction_time).format("MMM d, YYYY. hh:mm a")
                    }
                    {/* Feb 14th, 2023. 9:16am */}
                </div>
            </div>
        </div>
        <div className="text-lg font-semibold hidden md:block">
            <div className="flex text-2xl font-semibold items-center">
                <span>
                    {transaction.type == "DEBIT" ? "-" : "+"}
                </span>

                <div className="text-2xl font-semibold">{getSymbolFromCurrency("NGN")}</div>
                <span>
                    {formatToCurrency((Number(transaction.amount) / 100))}
                </span>
            </div>
        </div>
    </div>)
}

export const TransactionItem: React.FC<{ transaction: TransactionModel }> = ({ transaction }) => {
    const user = useAppSelector(state => state.auth.user);

    return (
        <>
            {transaction.type == "FX" ?
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div>
                            <div className="md:w-[82px] md:h-[73px] w-[52px] h-[43px] rounded-xl bg-green-100 text-green-600 flex  items-center justify-center text-lg">
                                <svg className="rotate-180 md:w-[34px] md:h-[34px] w-[15px] h-[15px]" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                    <g clipPath="url(#clip0_137_849)">
                                        <path d="M17 33.9167V8.91675" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M26.9163 17L16.9997 7.08333L7.08301 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_137_849">
                                            <rect width="34" height="34" fill="white" transform="matrix(1 0 0 -1 0 34)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold">
                                Transfer from {transaction.currency_from} Wallet {Number(user?.id) != transaction.user_id ? `(${transaction.user_id})` : ""} <span className="capitalize">
                                </span>
                            </div>
                            <div className="text-lg mt-2">
                                {
                                    moment(transaction.created_at).format("MMM d, YYYY. hh:mm a")
                                }
                                {/* Feb 14th, 2023. 9:16am */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex text-2xl font-semibold items-center">
                            <span>
                                +
                            </span>
                            <div className="text-4xl font-semibold">{getSymbolFromCurrency(transaction.currency_to)}</div>
                            <span>
                                {formatToCurrency((Number(transaction.amount_to) / 100))}
                            </span>
                        </div>
                    </div>
                </div>
                : <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div>
                            <div className="md:w-[82px] md:h-[73px] w-[52px] h-[43px] rounded-xl bg-[#FFEDF3] flex  items-center justify-center text-lg">
                                <svg className="md:w-[34px] md:h-[34px] w-[15px] h-[15px]" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                    <g clipPath="url(#clip0_137_849)">
                                        <path d="M17 33.9167V8.91675" stroke="#EC3662" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M26.9163 17L16.9997 7.08333L7.08301 17" stroke="#EC3662" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_137_849">
                                            <rect width="34" height="34" fill="white" transform="matrix(1 0 0 -1 0 34)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold">
                                Payment: {transaction.reference}
                            </div>
                            <div className="text-lg mt-2">
                                {
                                    moment(transaction.created_at).format("MMM d, YYYY. hh:mm a")
                                }
                                {/* Feb 14th, 2023. 9:16am */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex text-2xl font-semibold items-center">
                            <span>
                                -
                            </span>

                            <div className="text-2xl font-semibold">{getSymbolFromCurrency(transaction.currency)}</div>


                            <span>
                                {formatToCurrency((Number(transaction.amount) / 100))}
                            </span>
                        </div>
                    </div>
                </div>}
        </>

    )
}
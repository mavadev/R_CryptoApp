import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CryptoCurrency, CryptoPrice, Pair } from '../types';
import { fetchCurrentCryptoPrice, getCryptos } from '../services/CryptoServices';

type CryptoStore = {
	cryptoCurrencies: CryptoCurrency[];
	cryptoPrice: CryptoPrice | undefined;
	loading: boolean;

	fetchCryptos: () => Promise<void>;
	fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
	devtools(set => ({
		cryptoCurrencies: [],
		cryptoPrice: undefined,
		loading: false,
		fetchCryptos: async () => {
			const cryptoCurrencies = await getCryptos();
			set(state => ({
				...state,
				cryptoCurrencies,
			}));
		},
		fetchData: async pair => {
			set(state => ({
				...state,
				loading: true,
			}));
			const cryptoPrice = await fetchCurrentCryptoPrice(pair);
			set(state => ({
				...state,
				cryptoPrice,
				loading: false,
			}));
		},
	}))
);

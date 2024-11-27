import axios from 'axios';
import { Pair } from '../types';
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from '../schemas';

export async function getCryptos() {
	const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
	try {
		const { data: { Data } } = await axios.get(url);
		const result = CryptoCurrenciesResponseSchema.safeParse(Data);
		if (result.success) return result.data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
	const { cryptoCurrency, currency } = pair;
	const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;

	try {
		const { data: { DISPLAY } } = await axios.get(url);
		const result = CryptoPriceSchema.safeParse(DISPLAY[cryptoCurrency][currency]);
		if(result.success) return result.data;
	} catch (error) {
		console.error(error);
	}
}

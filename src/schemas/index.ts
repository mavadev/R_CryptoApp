import { z } from 'zod';

export const CurrencySchema = z.object({
	code: z.string(),
	name: z.string(),
});

export const CryptoCurrencyResponseSchema = z.object({
	CoinInfo: z.object({
		Name: z.string(),
		FullName: z.string(),
		ImageUrl: z.string(),
	}),
});
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema);

export const PairSchema = z.object({
	currency: z.string(),
	cryptoCurrency: z.string(),
});

export const CryptoPriceSchema = z.object({
	PRICE: z.string(),
	IMAGEURL: z.string(),
	HIGHDAY: z.string(),
	LOWDAY: z.string(),
	LASTUPDATE: z.string(),
	CHANGEPCT24HOUR: z.string(),
});

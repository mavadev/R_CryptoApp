import { z } from 'zod';
import { CryptoCurrencyResponseSchema, CryptoPriceSchema, CurrencySchema, PairSchema } from '../schemas';

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Pair = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;

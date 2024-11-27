import { ChangeEvent, FormEvent, useState } from 'react';
import { Pair } from '../types';
import { currencies } from '../data';
import { useCryptoStore } from '../store/crypto-store';
import ErrorMessage from './ErrorMessage';

const CriptoSearchForm = () => {
	const cryptoCurrencies = useCryptoStore(state => state.cryptoCurrencies);
	const fetchData = useCryptoStore(state => state.fetchData);

	const [error, setError] = useState('');
	const [pair, setPair] = useState<Pair>({
		currency: '',
		cryptoCurrency: '',
	});

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setPair({
			...pair,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validar datos
		if (Object.values(pair).includes('')) {
			setError('Debe completar todos los campos');
			return;
		}

		// Consultar la API
		fetchData(pair);
	};

	return (
		<form
			className='form'
			onSubmit={handleSubmit}>
			<ErrorMessage error={error} />
			<div className='field'>
				<label htmlFor='currency'>Moneda:</label>
				<select
					id='currency'
					name='currency'
					onChange={handleChange}
					defaultValue={pair.currency}>
					<option value=''>-- Seleccione --</option>
					{currencies.map(currency => (
						<option
							key={currency.code}
							value={currency.code}>
							{currency.name}
						</option>
					))}
				</select>
			</div>
			<div className='field'>
				<label htmlFor='cryptoCurrency'>Criptomoneda:</label>
				<select
					id='cryptoCurrency'
					name='cryptoCurrency'
					onChange={handleChange}
					defaultValue={pair.cryptoCurrency}>
					<option value=''>-- Seleccione --</option>
					{cryptoCurrencies.map((cryptoCurrency, index) => (
						<option
							key={index}
							value={cryptoCurrency.CoinInfo.Name}>
							{cryptoCurrency.CoinInfo.FullName}
						</option>
					))}
				</select>
			</div>
			<input
				type='submit'
				value='Cotizar'
			/>
		</form>
	);
};

export default CriptoSearchForm;

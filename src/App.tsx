import { useEffect } from 'react';
import { useCryptoStore } from './store/crypto-store';
import { CryptoPriceDetails, CryptoSearchForm, Loader } from './components';

function App() {
	const fetchCryptos = useCryptoStore(state => state.fetchCryptos);
	const cryptoPrice = useCryptoStore(state => state.cryptoPrice);
	const loading = useCryptoStore(state => state.loading);

	useEffect(() => {
		fetchCryptos();
	}, []);

	return (
		<div className='container'>
			<h1 className='app-title'>
				Cotizador de <span>Criptomonedas</span>
			</h1>
			<div className='content'>
				<CryptoSearchForm />
				{loading ? <Loader /> : cryptoPrice ? <CryptoPriceDetails /> : <></>}
			</div>
		</div>
	);
}

export default App;

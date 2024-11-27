import { useCryptoStore } from '../store/crypto-store';

const CryptoPriceDetails = () => {
	const cryptoPrice = useCryptoStore(state => state.cryptoPrice);

	if (!cryptoPrice) return <></>;
	return (
		<div className='result-wrapper'>
			<h2>Cotización</h2>
			<div className='result'>
				<img
					alt='Imagen de CryptoMoneda'
					src={`https://cryptocompare.com/${cryptoPrice.IMAGEURL}`}
				/>
				<div>
					<p>Precio: <span>{cryptoPrice.PRICE}</span></p>
					<p>Precio más bajo: <span>{cryptoPrice.LOWDAY}</span></p>
					<p>Precio más alto: <span>{cryptoPrice.HIGHDAY}</span></p>
					<p>Variación últimas 24 horas: <span>{cryptoPrice.CHANGEPCT24HOUR}</span></p>
					<p>Última actualización: <span>{cryptoPrice.LASTUPDATE}</span></p>
				</div>
			</div>
		</div>
	);
};

export default CryptoPriceDetails;

const ErrorMessage = ({ error }: { error: string }) => {
	if (!error) return <></>;
	return <p className='error-message'>{error}</p>;
};

export default ErrorMessage;

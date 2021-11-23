// import currencies from './currencies.js';

export async function handleButtonClick(event) {
  const { localCurrency, default: currency } = await import('./currencies.js');
  console.log(localCurrency, currency);
}

import React, { useId } from 'react'

function InputBox(
    {label, 
    amount, 
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",}
) {

    const id = useId();
  return (

    <div className= {` bg-white p-3 rounded-lg text-sm flex ${className}`}>
        
        <div className='w-1/2'> 
            <label htmlFor={id} className=' mb-2 text-black/40 inline-block'> {label}</label>
            <input type="number"
            className='w-full outline-none bg-transparent py-1.5 '
            placeholder='Enter Amount'
            value={amount}
            disabled ={amountDisable}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            id={id}
            />
            
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40  mb-2 w-full'>Currency type</p>
            <select className='px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled = {currencyDisable}>
                {currencyOptions.map((currency) => (
                    <option value= {currency} key={currency}> {currency.toUpperCase()}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox
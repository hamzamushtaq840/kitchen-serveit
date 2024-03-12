import React, { useState } from 'react';
import toast from 'react-hot-toast';
import TopBar from '../components/generic/TopBar';
import cardBg2 from './../assets/cart/cardBg2.png';

const AddCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [displayCardNumber, setDisplayCardNumber] = useState('**** **** **** ****');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const formatCardNumber = (input) => {
    return input.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (input) => {
    return input.replace(/\D/g, '').replace(/(\d{2})(\d{1,2})/, '$1/$2').trim();
  };

  const handleCardNumberChange = (input) => {
    const temp = formatCardNumber(input);
    setCardNumber(temp);
    let format = '';
    let tempIndex = 0; // Index for tracking position in temp
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0 && i !== 0) {
        format += ' '; // Add space after every 4 characters except the first group
      }
      if (temp[tempIndex] === ' ') {
        tempIndex++; // Skip spaces in temp
      }
      format += (tempIndex < temp.length) ? temp[tempIndex] : '*'; // Show characters from temp, mask the rest
      tempIndex++; // Move to the next character in temp
    }
    setDisplayCardNumber(format);
  };

  const handleExpiryDateChange = (input) => {
    setExpiryDate(formatExpiryDate(input));
  };

  const handleCVCChange = (input) => {
    setCVC(input.replace(/\D/g, '').slice(0, 3));
  };

  const handleCardHolderNameChange = (input) => {
    setCardHolderName(input);
  };

  const handleSaveCardChange = () => {
    setSaveCard(!saveCard);
  };

  const handleDone = () => {
    // Your logic for handling the completion of adding a card

  };

  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <TopBar content={'Add Card'} />
      <div className="flex mt-20 flex-col items-center justify-center mx-5">

        <div className="relative mb-4">
          {/* <p className="text-lg font-semibold mb-1">{cardNumber}</p>
          <p className="text-lg mb-1">{expiryDate}</p>
          <p className="text-lg">{cvc}</p> */}
          <img src={cardBg2} alt="" srcset="" />

          <span className='absolute bottom-24 text-xl left-[7%] flex gap-1 flex-col font-bold rubik tracking-widest h-6 text-white'>{displayCardNumber}</span>

          <div className='absolute top-5 left-[7%] flex gap-1 flex-col'>
            <span className='text-xs uppercase font-bold text-[#ccc]'>Name</span>
            <span className='font-bold rubik tracking-widest h-6 text-white'>{cardHolderName}</span>
          </div>
          <div className='absolute bottom-5 left-[7%] w-[86%] flex justify-between'>
            <div className='flex flex-col gap-1'>
              <span className='text-xs uppercase font-bold text-[#ccc]'>Expiry Date</span>
              <span className='font-bold rubik tracking-widest h-6 text-white'>{expiryDate}</span>
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <span className='text-xs uppercase font-bold text-[#ccc]'>cvc</span>
              <span className='font-bold rubik tracking-widest h-6 w-8 text-white'>{cvc}</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="cardHolderName" className="font-medium rubik">
            Cardholder's Name
          </label>
          <input
            id="cardHolderName"
            className="rubik w-full rounded-lg border-0 bg-greyBg px-2 py-3 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            type="text"
            placeholder="Cardholder's Name"
            value={cardHolderName}
            onChange={(e) => handleCardHolderNameChange(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-2 w-full mt-4'>
          <label for="email" className="font-medium rubik">
            Card Number
          </label>
          <input
            className="rubik w-full rounded-lg border-0 bg-greyBg px-2 py-3 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            type="text"
            label="Card Number"
            placeholder="**** **** **** ****"
            maxLength="19"
            value={cardNumber}
            onChange={(e) => handleCardNumberChange(e.target.value)}
          />
        </div>
        <div className='flex gap-2 w-full mt-4'>
          <div className='flex flex-col gap-2 w-1/2'>
            <label for="email" className="font-medium rubik">
              MM/YY
            </label>
            <input
              className="rubik rounded-lg border-0 bg-greyBg px-2 py-3 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              type="text"
              placeholder="Expiry Date"
              maxLength="5"
              value={expiryDate}
              onChange={(e) => handleExpiryDateChange(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2 w-1/2'>
            <label for="email" className="font-medium rubik">
              CVC
            </label>
            <input
              className="rubik rounded-lg border-0 bg-greyBg px-2 py-3 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              type="text"
              placeholder="CVC"
              maxLength="3"
              value={cvc}
              onChange={(e) => handleCVCChange(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center w-full justify-start mt-3">
          <input
            id="saveCard"
            type="checkbox"
            className="rounded border-gray-300 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            checked={saveCard}
            onChange={handleSaveCardChange}
          />
          <label htmlFor="saveCard" className="ml-2 rubik text-sm text-[#676767]">
            Save this card for a faster checkout next time
          </label>
        </div>
      </div>
      <div className='flex flex-1 items-end pb-4 mx-5'>
        <button
          onClick={() => {
            toast.success("Success")
          }}
          className="rubik text-button h-[54px] w-full rounded-lg bg-primary text-lg font-bold">
          Done
        </button>
      </div>
    </div>
  );
};

export default AddCard;

import { useSelector } from "react-redux";
import { useState } from 'react';
import { CreditCard, Building2, DollarSign, ChevronDown, Search } from 'lucide-react';

export default function Checkout()
{
  const product = useSelector(state => state.getSubmit?.product || 'Your Product');

  const [selectedPlan, setSelectedPlan] = useState('lite');
  const [paymentTab, setPaymentTab] = useState('card');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [country, setCountry] = useState('United States');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [taxId, setTaxId] = useState('');
  const [bankSearch, setBankSearch] = useState('');
  const [fullName, setFullName] = useState('');

  const plans = {
    lite: { price: 6.99, name: 'Lite' },
    basic: { price: 19.99, name: 'Basic' },
    standard: { price: 29.99, name: 'Standard' },
    premium: { price: 49.99, name: 'Premium' }
  };

  const banks = [
    { name: 'Bank of America', icon: '/images/CheckoutBanks/bankofamerica.png' },
    { name: 'Chase', icon: '/images/CheckoutBanks/chase.png' },
    { name: 'Mercury', icon: '/images/CheckoutBanks/mercury.png' },
    { name: 'Wells Fargo', icon: '/images/CheckoutBanks/wf.png' },
    { name: 'Capital One', icon: '/images/CheckoutBanks/CapitalOne.png' },
    { name: 'PayPal', icon: '/images/CheckoutBanks/PayPal.png' },
    { name: 'Brex', icon: '/images/CheckoutBanks/Brex.png' },
    { name: 'Relay Financial', icon: '/images/CheckoutBanks/RelayFinancial.jpg' },
    { name: 'Truist', icon: '/images/CheckoutBanks/Truist.jpg' },
    { name: 'Navy Federal C...', icon: '/images/CheckoutBanks/NavyFederal.png' },
    { name: 'US Bank', icon: '/images/CheckoutBanks/USBank.png' },
    { name: 'PNC Bank', icon: '/images/CheckoutBanks/PncBank.jpg' },
  ];

  const selectedPrice = plans[selectedPlan].price;

  return (
    <div className="min-h-screen mt-15 bg-white">
      <div className='flex flex-col sm:flex-row'>
        {/* Left Section */}
        <div className="w-full sm:w-1/2 py-6 sm:py-8 px-6 sm:px-8 lg:px-12 bg-gray-50">
          <div className='flex items-center mb-8 sm:mb-12'>
            <div className="w-7 h-7 sm:w-8 sm:h-8 mr-2 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">C</span>
            </div>
            <span className="font-semibold text-base sm:text-lg text-gray-900">10015.io</span>
          </div>
          
          <div className="max-w-xl mx-auto">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Feature Your Product on 10015.io
            </h1>
            
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Highlight your product, <strong>"{product}"</strong>, on the 10015.io Product Finder and increase its visibility to a wider audience.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {['lite', 'basic', 'standard', 'premium'].map((plan) => (
                <div 
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={`border-2 rounded-xl p-4 sm:p-5 cursor-pointer transition-all ${
                    selectedPlan === plan 
                      ? 'border-[#7047EB] bg-white' 
                      : 'border-gray-300 bg-white hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedPlan === plan ? 'border-[#7047EB]' : 'border-gray-400'
                      }`}>
                        {selectedPlan === plan && (
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#7047EB]"></div>
                        )}
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-gray-900 capitalize">{plans[plan].name}</span>
                    </div>
                    <span className="text-base sm:text-lg font-bold text-gray-900">${plans[plan].price}</span>
                  </div>
                  
                  <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">${plans[plan].price} billed every month</p>
                  
                  <p className="text-gray-700 text-xs sm:text-sm">
                    {plan === 'lite' && 'Make your product pages indexable by Google to improve your website\'s SEO'}
                    {plan === 'basic' && 'Feature your product on your product\'s category & tag pages'}
                    {plan === 'standard' && 'Feature your product on Product Finder main page, and your product\'s category & tag pages'}
                    {plan === 'premium' && (
                      <>Feature your product on <span className="text-blue-600">10015.io</span> homepage, Product Finder main page, your product's categories & tags, and all product pages</>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 p-6 sm:p-8 lg:p-12 bg-white overflow-y-auto">
          <div className="max-w-xl mx-aut">
            <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6 bg-gray-50">
              <button
                onClick={() => setPaymentTab('card')}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium cursor-pointer transition-all text-xs sm:text-sm ${
                  paymentTab === 'card'
                  ? 'bg-white border-2 border-[#EBEBEE] text-gray-900 '
                  : 'bg-gray-50 border-2 border-transparent text-gray-600 hover:text-gray-900'
                }`}>
                  Pay by Card
              </button>
              <button
                onClick={() => setPaymentTab('paypal')}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium cursor-pointer transition-all text-xs sm:text-sm ${
                  paymentTab === 'paypal'
                  ? 'bg-white border-2 border-[#EBEBEE] text-gray-900'
                  : 'bg-gray-50 border-2 border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Pay with PayPal
              </button>
            </div>

            {paymentTab === 'card' ? (
              <>
                <div className="mb-4">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Payment method
                  </label>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <button
                      onClick={() => setSelectedPaymentMethod('card')}
                      className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg border-2 transition-all ${
                        selectedPaymentMethod === 'card'
                          ? 'border-[#7047EB] bg-white'
                          : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 mb-1" />
                      <span className="text-xs font-medium text-gray-900">Card</span>
                    </button>

                    <button
                      onClick={() => setSelectedPaymentMethod('bank')}
                      className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg border-2 transition-all ${
                        selectedPaymentMethod === 'bank'
                          ? 'border-[#7047EB] bg-white'
                          : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 mb-1" />
                      <span className="text-xs font-medium text-gray-900">Bank</span>
                    </button>

                    <button
                      onClick={() => setSelectedPaymentMethod('cashapp')}
                      className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg border-2 transition-all relative ${
                        selectedPaymentMethod === 'cashapp'
                          ? 'border-[#7047EB] bg-white'
                          : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      <div className="relative">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#00D632] rounded-md flex items-center justify-center mb-1">
                          <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                        </div>
                        <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[8px] px-1 py-0.5 rounded font-bold">
                          $5 back
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-900">Cash App Pay</span>
                    </button>
                  </div>

                  {selectedPaymentMethod === 'card' && (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Card number"
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                      />
                      
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          placeholder="MM / YY"
                          className="px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        />
                        <input
                          type="text"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          placeholder="CVC"
                          className="px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        />
                      </div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                          Cardholder name
                        </label>
                        <input
                          type="text"
                          value={cardholderName}
                          onChange={(e) => setCardholderName(e.target.value)}
                          placeholder="Name on card"
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        />
                    </div>
                  )}

                  {selectedPaymentMethod === 'bank' && (
                    <div className="space-y-4">
                      <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={bankSearch}
                          onChange={(e) => setBankSearch(e.target.value)}
                          placeholder="Search for your bank..."
                          className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        />
                      </div>
                      
                      <div className="grid mb-10 grid-cols-4 gap-3 max-h-64">
                        {banks
                          .filter(bank => bank.name.toLowerCase().includes(bankSearch.toLowerCase()))
                          .map((bank) => (
                            <button
                              key={bank.name}
                              className="bg-white border border-gray-200 rounded-2xl p-4 rounded-lg hover:opacity-80 transition-opacity flex flex-col items-center justify-center gap-2"
                            >
                              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                <img src={bank.icon} alt={bank.name} className="w-6 h-6 object-contain" />
                              </div>
                              <span className="text-[10px] font-medium text-gray-700 text-center leading-tight">
                                {bank.name}
                              </span>
                            </button>
                          ))}
                      </div>
                      <div className="mb-4 mt-5">
                        <label className="mt-4 block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                          Full name
                        </label>
                        <input
                          type="text"
                          value={cardholderName}
                          onChange={(e) => setCardholderName(e.target.value)}
                          placeholder="John More Doe"
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        />
                      </div>
                    </div>
                  )}

                  {selectedPaymentMethod === 'cashapp' && (
                    <div className="space-y-4">
                      {/* Cash App Pay Selected Notice */}
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-[#00D632] rounded-md flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-white" strokeWidth={3} />
                          </div>
                          <span className="text-sm font-medium text-gray-900">Cash App Pay selected.</span>
                        </div>
                        
                        <div className="flex items-start gap-3 text-sm text-gray-600">
                          <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                          </svg>
                          <span>You will be shown a QR code to scan using Cash App.</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                          Full name
                        </label>
                        <input
                          type="text"
                          value={cardholderName}
                          onChange={(e) => setCardholderName(e.target.value)}
                          placeholder="John More Doe"
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        />
                      </div>

                      {/* Authorization Notice */}
                      <p className="text-xs text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg">
                        By continuing, you authorize Lemon Squeezy LLC to debit your Cash App account for this payment and future payments in accordance with Lemon Squeezy LLC's terms, until this authorization is revoked. You can change this anytime in your Cash App Settings.
                      </p>

                      {/* Full Name Input */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Full name
                        </label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="John More Doe"
                          className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        />
                      </div>
                    </div>
                  )}
                  <div className="mb-4 mt-5">
                      <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                        Billing address
                      </label>
                      
                      <div className="space-y-3">
                        <div className="relative">
                          <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 appearance-none bg-white"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>United Kingdom</option>
                          </select>
                          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Address line 1"
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        />

                        <div className="relative">
                          <select
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-400 appearance-none bg-white"
                          >
                            <option value="">Select a state...</option>
                            <option>California</option>
                            <option>New York</option>
                            <option>Texas</option>
                          </select>
                          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                            className="px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                          />
                          <input
                            type="text"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            placeholder="ZIP"
                            className="px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                        Tax ID number <span className="text-gray-500 font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={taxId}
                        onChange={(e) => setTaxId(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900"
                      />
                    </div>
                </div>
              </>
            ) : (
              <>
                {/* PayPal Payment */}
                <div className="mb-4">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john@example.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>

                

                <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed mb-4">
                  By subscribing, you authorize Lemon Squeezy LLC to charge you according to the terms until you cancel.
                </p>

                <div className="mb-4">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Billing address
                  </label>
                  
                  <div className="space-y-3">
                    <div className="relative">
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 appearance-none bg-white"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                      </select>
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address line 1"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                    />

                    <div className="relative">
                      <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-400 appearance-none bg-white"
                      >
                        <option value="">Select a state...</option>
                        <option>California</option>
                        <option>New York</option>
                        <option>Texas</option>
                      </select>
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        className="px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                      />
                      <input
                        type="text"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        placeholder="ZIP"
                        className="px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Tax ID number <span className="text-gray-500 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900"
                  />
                </div>
              </>
            )}

            <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-4 sm:mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-xs sm:text-sm text-gray-700">Subtotal</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-900">${selectedPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm sm:text-base font-semibold text-gray-900">Total</span>
                <span className="text-sm sm:text-base font-bold text-gray-900">${selectedPrice.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg transition-colors shadow-sm mb-3 sm:mb-4 text-sm sm:text-base">
              Pay ${selectedPrice.toFixed(2)}
            </button>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-lg sm:text-xl">🍋</span>
                <span className="text-[10px] sm:text-xs text-gray-500">Powered by Lemon Squeezy</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
                <button className="hover:text-gray-700">Terms</button>
                <span>•</span>
                <button className="hover:text-gray-700">Privacy</button>
                <span>•</span>
                <button className="hover:text-gray-700">Help</button>
                <span>•</span>
                <button className="flex items-center gap-1 hover:text-gray-700">
                  English
                  <ChevronDown className="w-2 h-2 sm:w-3 sm:h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
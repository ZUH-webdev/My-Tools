import { useState } from 'react'
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SiGooglechrome,SiFirefox,SiSafari,SiOpera,SiLinux,SiHuawei } from 'react-icons/si';

function Submit()
{
  const navigate = useNavigate();

  const [ display,setDisplay ] = useState(false);
  const [productName, setProductName] = useState('');
  const [productTagline, setProductTagline] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productURL, setProductURL] = useState('');
  const [pricing, setPricing] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [productImageURL, setProductImageURL] = useState('');
  const [productIconURL, setProductIconURL] = useState('');
  const [category, setCategory] = useState('');
  const [secondaryCategory, setSecondaryCategory] = useState('');
  const [tags, setTags] = useState('');
  const [otherTags, setOtherTags] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [appStore, setAppStore] = useState('');
  const [googlePlay, setGooglePlay] = useState('');
  const [huaweiGallery, setHuaweiGallery] = useState('');
  const [macApp, setMacApp] = useState('');
  const [windowsApp, setWindowsApp] = useState('');
  const [linuxApp, setLinuxApp] = useState('');
  const [chrome, setChrome] = useState('');
  const [firefox, setFirefox] = useState('');
  const [safari, setSafari] = useState('');
  const [edge, setEdge] = useState('');
  const [opera, setOpera] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [youtube, setYoutube] = useState('');
  const [github, setGithub] = useState('');
  const [discord, setDiscord] = useState('');
  const [link, setLink] = useState('');
  const [founderName, setFounderName] = useState('');
  const [founderTitle, setFounderTitle] = useState('');
  const [founderAvatar, setFounderAvatar] = useState('');

  const [url,setUrl] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState(false);

  return (
    <div>
      <div className='md:mt-30 mt-10 px-3 md:flex-col relative inset-0 lg:px-50'>
        <p className='text-gray-500 text-start mb-1 hover:text-[#474BFF] cursor-pointer'
          onClick={() => navigate(-1)}>Go Back to Product Finder</p>
        <div className='bg-gray-50 lg:w-full sm:w-fit p-10 mt-3 md:flex md:flex-col'>
          <h3 className='text-[#474BFF] text-2xl font-bold mb-3'>Submit your product</h3>
          <h4 className='text-xl text-[#26274B] font-bold mb-3'>1. Please enter the webpage of your product<span className='text-red-600'>*</span></h4>
          <div className='border border-gray-300 bg-white rounded p-2 text-[18px] flex justify-between mb-4 cursor-pointer'
            onClick={() => {setDisplay(true)}}>
            <input type="text" className='cursor-pointer bg-transparent  outline-none flex-1' placeholder='URL of your product*' value={url}
            onChange={(e) => {setUrl(e.target.value)}} />
            <button className='text-[#A0A5FF] hidden md:block cursor-pointer border border-[#A0A5FF] rounded-4xl pt-1 px-2'
              style={{borderColor: additionalInfo ? "#3236FD" : "#A0A5FF",
                      color: additionalInfo ? "#3236FD" : "#A0A5FF"}}
              onClick={(e) => {e.stopPropagation(); {url !== "" ? setAdditionalInfo(true) : setAdditionalInfo(false)}}}>Submit URL</button>
          </div>
          <div className='md:hidden flex justify-center mb-4'>
            <button className='text-[#A0A5FF] border w-full border-[#A0A5FF] rounded-4xl md:py-1 md:px-2'
              style={{borderColor: additionalInfo ? "#3236FD" : "#A0A5FF",
                      color: additionalInfo ? "#3236FD" : "#A0A5FF"}}
              onClick={() => setAdditionalInfo(true)}>
              Submit URL
            </button>
          </div>
          <p className='text-gray-500 cursor-pointer mb-8'>*Your site data will be fetched and used to fill out the submission form. Please review the fields.</p>

          {additionalInfo && (
          <>
          <h4 className='text-xl text-[#26274B] font-bold mb-4'>2. Please fill the submission form</h4>
          
          {/* Product Name */}
          <div className='mb-4 '>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder='Product Name*'
              className='w-full border border-gray-300 bg-white rounded p-3 text-base outline-none focus:border-[#474BFF]'
            />
          </div>

          {/* Product Tagline */}
          <div className='mb-4'>
            <input
              type="text"
              value={productTagline}
              onChange={(e) => setProductTagline(e.target.value)}
              placeholder='Product Tagline (40 to 120 characters)'
              className='w-full border border-gray-300 rounded bg-white p-3 text-base outline-none focus:border-[#474BFF]'
            />
          </div>

          {/* Product Description */}
          <div className='mb-4'>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder='Product Description (60 to 250 characters)*'
              rows={4}
              className='w-full border border-gray-300 rounded bg-white p-3 text-base outline-none focus:border-[#474BFF] resize-none'
            />
          </div>

          {/* Product URL and Pricing */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <input
              type="text"
              value={productURL}
              onChange={(e) => setProductURL(e.target.value)}
              placeholder='Product URL*'
              className='border border-gray-300 bg-white rounded p-3 text-base outline-none focus:border-[#474BFF]'
            />
            <div className='relative'>
              <select
                value={pricing}
                onChange={(e) => setPricing(e.target.value)}
                className='w-full border border-gray-300 bg-white rounded p-3 text-base outline-none focus:border-[#474BFF] appearance-none text-gray-500'
              >
                <option value="">Pricing*</option>
                <option value="free">Free</option>
                <option value="freemium">Freemium</option>
                <option value="paid">Paid</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 bg-white absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Product Details */}
          <div className='mb-4 relative'>
            <textarea
              value={productDetails}
              onChange={(e) => setProductDetails(e.target.value)}
              placeholder='Product Details (Min 300 characters)*'
              rows={6}
              className='w-full border border-gray-300 rounded bg-white p-3 text-base outline-none focus:border-[#474BFF] resize-none'
            />
            <span className='absolute bottom-3 right-3 text-sm text-gray-400'>
              {productDetails.length} / 2000
            </span>
          </div>

          {/* Product Image */}
          <div className='mb-6'>
            <h5 className='text-base font-semibold text-[#26274B] mb-3'>
              Product Image <span className='font-normal text-gray-500'>(Ideal: 1200 x 630px)</span>
            </h5>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='border border-gray-300 bg-white rounded p-4 flex items-center justify-center min-h-[150px]'>
                <span className='text-gray-400'>No Image Found</span>
              </div>
              <div className='space-y-3'>
                <input
                  type="text"
                  value={productImageURL}
                  onChange={(e) => setProductImageURL(e.target.value)}
                  placeholder='Product Image URL'
                  className='w-full border bg-white border-gray-300 rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
                <div className='text-center text-gray-500'>or</div>
                <button className='w-full border border-gray-300 rounded p-3 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
                  </svg>
                  Click to upload
                </button>
                <p className='text-xs text-gray-500'>JPEG, PNG, SVG, WEBP or GIF. Max: 2MB</p>
              </div>
            </div>
          </div>

          {/* Product Icon */}
          <div className='mb-6'>
            <h5 className='text-base font-semibold text-[#26274B] mb-3'>
              Product Icon <span className='font-normal text-gray-500'>(Ideal: 800 x 800px)</span>
            </h5>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='border border-gray-300 rounded p-4 flex items-center justify-center bg-gray-100 min-h-[150px]'>
                <span className='text-gray-400'>No Icon Found</span>
              </div>
              <div className='space-y-3'>
                <input
                  type="text"
                  value={productIconURL}
                  onChange={(e) => setProductIconURL(e.target.value)}
                  placeholder='Product Icon URL'
                  className='w-full border border-gray-300 bg-white rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
                <div className='text-center text-gray-500'>or</div>
                <button className='w-full border bg-white border-gray-300 rounded p-3 text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
                  </svg>
                  Click to upload
                </button>
                <p className='text-xs text-gray-500'>JPEG, PNG, SVG, WEBP or ICO. Max: 2MB</p>
              </div>
            </div>
          </div>

          {/* Category and Tags */}
          <div className='mb-6'>
            <h5 className='text-base font-semibold text-[#26274B] mb-3'>Category and Tags</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
              <div className='relative'>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className='w-full border border-gray-300 bg-white rounded p-3 text-base outline-none focus:border-[#474BFF] appearance-none bg-white text-gray-500'
                >
                  <option value="">Category*</option>
                  <option value="productivity">Productivity</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <input
                type="text"
                value={secondaryCategory}
                onChange={(e) => setSecondaryCategory(e.target.value)}
                placeholder='Secondary Category (Optional)'
                className='border bg-white border-gray-300 rounded p-3 text-base outline-none focus:border-[#474BFF]'
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='relative'>
                <select
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className='w-full border bg-white border-gray-300 rounded p-3 text-base outline-none focus:border-[#474BFF] appearance-none bg-white text-gray-500'
                >
                  <option value="">Tags (Max 5)*</option>
                  <option value="ai">AI</option>
                  <option value="saas">SaaS</option>
                  <option value="mobile">Mobile</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <input
                type="text"
                value={otherTags}
                onChange={(e) => setOtherTags(e.target.value)}
                placeholder='Other Tags (Comma separated)'
                className='border border-gray-300 rounded bg-white p-3 text-base outline-none focus:border-[#474BFF]'
              />
            </div>
            <p className='text-xs text-gray-500 mt-2'>Use if you couldn't find suitable tag(s) in the list</p>
          </div>

          {/* Promo Video */}
          <div className='mb-6'>
            <h5 className='text-base font-semibold text-[#26274B] mb-2'>
              Promo Video <span className='font-normal text-gray-500'>(Optional)</span>
            </h5>
            <input
              type="text"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
              placeholder='Video URL'
              className='w-full border bg-white border-gray-300 rounded p-3 text-base outline-none focus:border-[#474BFF] mb-2'
            />
            <p className='text-xs text-gray-500'>YouTube or Vimeo only. Please use the URL of the video page, not the embed code.</p>
          </div>

          {/* Mobile Apps */}
          <div className='mb-6'>
            <h5 className='text-base font-semibold text-[#26274B] mb-3'>
              Mobile Apps <span className='font-normal text-gray-500'>(Optional)</span>
            </h5>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/>
                </svg>
                <input
                  type="text"
                  value={appStore}
                  onChange={(e) => setAppStore(e.target.value)}
                  placeholder='App Store'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex border bg-white rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z'/>
                </svg>
                <input
                  type="text"
                  value={googlePlay}
                  onChange={(e) => setGooglePlay(e.target.value)}
                  placeholder='Google Play'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
            </div>
            <div className='mt-4'>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <SiHuawei  className='w-6 h-6 text-gray-400 ml-3' />
                <input
                  type="text"
                  value={huaweiGallery}
                  onChange={(e) => setHuaweiGallery(e.target.value)}
                  placeholder='Huawei AppGallery'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
            </div>
          </div>

          {/* Desktop Apps */}
          <div className='mb-6'>
            <h5 className='text-base font-semibold text-[#26274B] mb-3'>
              Desktop Apps <span className='font-normal text-gray-500'>(Optional)</span>
            </h5>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/>
                </svg>
                <input
                  type="text"
                  value={macApp}
                  onChange={(e) => setMacApp(e.target.value)}
                  placeholder='Mac'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z'/>
                </svg>
                <input
                  type="text"
                  value={windowsApp}
                  onChange={(e) => setWindowsApp(e.target.value)}
                  placeholder='Windows'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
            </div>
            <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
              <SiLinux className='w-6 h-6 text-gray-400 ml-3' />
              <input
                type="text"
                value={linuxApp}
                onChange={(e) => setLinuxApp(e.target.value)}
                placeholder='Linux'
                className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
              />
            </div>
          </div>

          {/* Browser Extensions */}
          <div className='mb-6'>
            <h5 className='text-base font-semibold text-[#26274B] mb-3'>
              Browser Extensions <span className='font-normal text-gray-500'>(Optional)</span>
            </h5>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <SiGooglechrome className='w-6 h-6 text-gray-400 ml-3' />
                <input
                  type="text"
                  value={chrome}
                  onChange={(e) => setChrome(e.target.value)}
                  placeholder='Chrome'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <SiFirefox className='w-6 h-6 text-gray-400 ml-3' />
                <input
                  type="text"
                  value={firefox}
                  onChange={(e) => setFirefox(e.target.value)}
                  placeholder='Firefox'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <SiSafari className='w-6 h-6 text-gray-400 ml-3' />
                <input
                  type="text"
                  value={safari}
                  onChange={(e) => setSafari(e.target.value)}
                  placeholder='Safari'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z'/>
                </svg>
                <input
                  type="text"
                  value={edge}
                  onChange={(e) => setEdge(e.target.value)}
                  placeholder='Edge'
                  className='flex-1 border-none p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <SiOpera className='w-6 h-6 text-gray-400 ml-3' />
                <input
                  type="text"
                  value={opera}
                  onChange={(e) => setOpera(e.target.value)}
                  placeholder='Opera'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
            </div>
          </div>

          {/* Social Media & Links */}
          <div className='mb-6'>
            <h5 className='text-base font-semibold text-[#26274B] mb-3'>
              Social Media & Links <span className='font-normal text-gray-500'>(Optional)</span>
            </h5>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z'/>
                </svg>
                <input
                  type="text"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  placeholder='Facebook'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.70,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.60 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z'/>
                </svg>
                <input
                  type="text"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  placeholder='Twitter'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z'/>
                </svg>
                <input
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder='Instagram'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z'/>
                </svg>
                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder='LinkedIn'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z'/>
                </svg>
                <input
                  type="text"
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                  placeholder='YouTube'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'/>
                </svg>
                <input
                  type="text"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  placeholder='GitHub'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z'/>
                </svg>
                <input
                  type="text"
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                  placeholder='Discord'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z'/>
                </svg>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder='Link'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
            </div>
            <p className='text-xs text-gray-500 mt-2'>Use if the platform have an important URL other than the main website.</p>
          </div>

          {/* Founders & Creators */}
          <div className='mb-6'>
            <h5 className='text-base font-semibold text-[#26274B] mb-2 flex items-center gap-2'>
              Founders & Creators <span className='font-normal text-gray-500'>(Optional)</span>
              <button className='text-xs text-[#474BFF] border border-[#474BFF] rounded px-2 py-1'>+New</button>
            </h5>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'/>
                </svg>
                <input
                  type="text"
                  value={founderName}
                  onChange={(e) => setFounderName(e.target.value)}
                  placeholder='Name Surname'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M10,4V6H14V4H10Z'/>
                </svg>
                <input
                  type="text"
                  value={founderTitle}
                  onChange={(e) => setFounderTitle(e.target.value)}
                  placeholder='Title'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
              <div className='flex bg-white border rounded-[3px] border-gray-300 items-center'>
                <svg className='w-6 h-6 text-gray-400 ml-3' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'/>
                </svg>
                <input
                  type="text"
                  value={founderAvatar}
                  onChange={(e) => setFounderAvatar(e.target.value)}
                  placeholder='Avatar Image URL'
                  className='flex-1 border-none rounded p-3 text-base outline-none focus:border-[#474BFF]'
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex justify-center mt-8'>
            <button className='bg-[#474BFF] text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-[#3236FD] transition-colors flex items-center gap-2'>
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
              </svg>
              Submit Product
            </button>
          </div>
          </>
          )}
        </div>
      </div>
      {/* {display && (
        <div className='fixed inset-0 z-50 px-8 flex justify-center items-center bg-black/30'
          onClick={() => {setDisplay(false)}}>
          <div className='bg-white p-4 rounded-xl border-white border w-100' onClick={(e) => e.stopPropagation()}>
            <h3 className='text-start w-full text-2xl font-medium mb-5'>Sign In / Register</h3>
            <p className='text-xl font-light mb-5'>You need to sign in or register to use this feature.</p>
            <div className='flex gap-x-4 justify-end'>
              <button className='text-[#3236FD] text-xl py-2 px-4 rounded-4xl border border-[#3236FD]'>Register</button>
              <button className='bg-[#3236FD] text-xl py-2 px-4 border rounded-4xl text-white'>Sign in</button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default Submit
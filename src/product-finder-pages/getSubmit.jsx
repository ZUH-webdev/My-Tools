import { Plus,Grid,Tag,Star,Link,Search,Home,Package,X,CheckCircle,AlertCircle } from 'lucide-react';
import { useState,useEffect } from 'react';
import { setProduct } from "../redux/slices/getSubmit";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import data from '../../data.json';

const products = data.pageProps && data.pageProps.products ? data.pageProps.products : [];

const packageDetail = [
  {
    lite: [
      "Indexed on Google and get a do follow high DA backlink",
      "Get a \"Boosted\" badge on your product's card and product page."
    ]
  },
  {
    basic: [
      "Listed on top of your product's category pages.",
      "Listed on top of your product's tag pages.",
      "Indexed and receive a valuable high DA dofollow backlink.",
      "Get a \"Featured\" badge on your product's card and product page."
    ]
  },
  {
    standard: [
      "Listed on top at Product Finder home page.",
      "Listed on top of your product's category pages.",
      "Listed on top of your product's tag pages.",
      "Indexed and receive a valuable high DA dofollow backlink.",
      "Get a \"Featured\" badge on your product's card and product page."
    ]
  },
  {
    premium: [
      "Listed on 10015.io home page.",
      "Listed on top at Product Finder home page.",
      "Listed on top of your product's category pages.",
      "Listed on top of your product's tag pages.",
      "Listed on every product detail page (which are not featured).",
      "Indexed and receive a valuable high DA dofollow backlink.",
      "Get a \"Featured\" badge on your product's card and product page."
    ]
  }
];

const visibleProducts = products
  .filter(p => {
    const n = (p.name || '').trim();
    if (!n) return false;
    if (n.includes('10015')) return false;
    return true;
  })
  .slice()
  .sort((a, b) => {
    const normalize = (name) => name.trim();

    const extractLeadingNumber = (name) => {
      const match = normalize(name).match(/^(\d+)/);
      return match ? Number(match[1]) : null;
    };

    const aName = normalize(a.name);
    const bName = normalize(b.name);

    const aNum = extractLeadingNumber(aName);
    const bNum = extractLeadingNumber(bName);

    if (aNum !== null && bNum !== null) {
      return aNum - bNum;
    }

    if (aNum !== null) return -1;
    if (bNum !== null) return 1;

    return aName.localeCompare(bName, 'en', {
      sensitivity: 'base',
      ignorePunctuation: true,
    });
  });

function GetSubmit()
{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [popUp, setPopUp] = useState(false);
  const [selectedPlan, setselectedPlan] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [borderColor, setBorderColor] = useState("#DDDDDD");
  const [packageError, setPackageError] = useState(false);
  const [showPackageError, setShowPackageError] = useState(false);
  const [productError, setproductError] = useState(false);

  function payment()
  {
    if(selectedProduct && selectedPlan)
    {
      navigate('/product-finder/checkout');
    }
    else
    {
      if(selectedProduct === "")
      {
        setBorderColor("#E62E2D");
        setproductError(true);
      }
      else if(selectedPlan === "")
      {
        setPackageError(true);
      }
    }
  }

  useEffect(() =>
    {
      if(popUp)
      {
        document.body.style.overflow = 'hidden';
      } 
      else
      {
        document.body.style.overflow = 'unset';
      }
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [popUp]);

  useEffect(() => {
    if (packageError)
    {
      setTimeout(() => setShowPackageError(true), 10);
      
      const hideTimer = setTimeout(() => {
        setShowPackageError(false);
        setTimeout(() => setPackageError(false), 1000);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }
  }, [packageError]);

  return (
    <div className='w-full sm:flex sm:flex-col px-4 sm:px-5 lg:px-8 py-10'>
      <div className='max-w-7xl mx-auto'>
        {packageError && (
          <div 
            className='bg-red-500 mt-8 w-fit rounded-xl mr-5 cursor-pointer fixed -right-82 flex px-3 py-5 transition-transform duration-500 ease-out'
            style={{transform: showPackageError ? 'translateX(-350px)' : 'translateX(0px)'}}
          >
            <AlertCircle className='text-white mr-1.5' />
            <p className='text-white text-[17px]'>Please select a package first.</p>
            <X 
              className='text-white w-4 font-bold ml-3 -m-2 h-4' 
              onClick={() => {
                setShowPackageError(false);
                setTimeout(() => setPackageError(false), 1000);
              }} 
            />
          </div>
        )}
        <div className='flex flex-col mt-7 items-center'>
          <div className='w-full max-w-6xl'>
            <p className='text-gray-500 text-start mb-2 hover:text-[#474BFF] cursor-pointer'
              onClick={() => {window.location.href="./product-finder"}}>Go Back to Product Finder</p>
          </div>
          <div className='bg-[#F8F9FB] w-full max-w-6xl p-4 sm:p-6 lg:p-8 cursor-pointer flex flex-col mt-10'>
            <h3 className='text-[#474BFF] text-2xl font-bold mb-3'>Feature your product</h3>
            <h4 className='text-xl text-[#26274B] font-bold mb-3'>Please choose your product<span className='text-red-600'>*</span></h4>
            <div className='mb-5'>
              <select className='border w-full max-w-md lg:w-76 rounded text-[17px] pl-3 py-3 text-[#80809A] cursor-pointer focus:outline-none' 
                      style={{borderColor: borderColor}}
                      value={selectedProduct}
                      onChange={(e) => {setSelectedProduct(e.target.value);dispatch(setProduct(e.target.value));setBorderColor("#DDDDDD");setproductError(false);}}>
                <option value="" disabled>
                  Select a product
                </option>
                {visibleProducts.map(product => (
                  <option key={product.hash} value={product.name} className="text-[#80809A]">
                    {product.name}
                  </option>
                ))}
              </select>
              {productError && (<p className='text-[#E62E2D] text-[11px]'>Required</p>)}
            </div>
            <div className='flex justify-between items-center mb-3'>
              <h4 className='text-xl text-[#26274B] font-bold'>Please choose your package<span className='text-red-600'>*</span></h4>
              <p className='underline text-[#4B4EFF] cursor-pointer' onClick={() => {setPopUp(true)}} >F.A.Q.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
              <div className='flex w-full'>
                <div className="w-full p-4 sm:p-6 bg-white border hover:border-slate-700 rounded-3xl font-sans"
                  style={{ borderColor: selectedPlan === "lite" ? "#474BFF" : "#D9DAEC"}}
                  onClick={() => {setselectedPlan("lite")}}>
                  <div className="mb-4">
                    <div className='flex justify-between'>
                      <h2 className="text-xl font-medium text-slate-800 mb-1">Lite</h2>
                      {selectedPlan === "lite" && (
                        <div className='flex justify-between'>
                          <CheckCircle className="text-[#474BFF] w-3 h-3 mt-2 mr-1" />
                          <p className='text-[#474BFF] text-xs mt-1.5'>SELECTED</p>
                        </div>)}
                    </div>
                    <p className="text-[17px] text-slate-500 mb-4">SEO Booster</p>
                    <Star className="fill-[#DDDDDD] text-[#DDDDDD] w-5 h-5" />
                  </div>
                  <div className="flex items-baseline mb-10">
                    <span className="text-2xl font-medium text-slate-800">$6.99</span>
                    <span className="text-slate-500 ml-2 text-lg">/ month</span>
                  </div>
                  <div className='flex gap-4'>
                    <Link className='w-4 h-4 text-slate-700 shrink-0' />
                    <p className='text-[#26274B] -mt-6 cursor-pointer'>Indexed on Google and get a do follow high DA backlink</p>
                  </div>
                </div>
              </div>
              <div className='flex w-full'>
                <div className="w-full p-4 sm:p-6 bg-white border rounded-3xl font-sans"
                  style={{ borderColor: selectedPlan === "basic" ? "#474BFF" : "#D9DAEC"}}
                  onClick={() => {setselectedPlan("basic")}}>
                  <div className="mb-4">
                    <div className='flex justify-between'>
                      <h2 className="text-xl font-medium text-slate-800 mb-1">Basic</h2>
                      {selectedPlan === "basic" && (
                        <div className='flex justify-between'>
                          <CheckCircle className="text-[#474BFF] w-3 h-3 mt-2 mr-1" />
                          <p className='text-[#474BFF] text-xs mt-1.5'>SELECTED</p>
                        </div>)}
                    </div>
                    <p className="text-[17px] text-slate-500 mb-4">Category Star</p>
                    <Star className="fill-[#F0AB1A] text-[#F0AB1A] w-5 h-5" />
                  </div>
                  <div className="flex items-baseline mb-3">
                    <span className="text-2xl font-medium text-slate-800">$19.99</span>
                    <span className="text-slate-500 ml-2 text-lg">/ month</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4">
                      <Plus className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                      <span className="text-[17px] text-slate-700">Everything on Lite</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Grid className="w-5 h-5 text-slate-700 shrink-0 mt-3" />
                      <span className="text-[17px] text-slate-700 leading-tight">
                        Featured on your product's categories
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Tag className="w-5 h-5 text-slate-700 shrink-0 mt-3" />
                      <span className="text-[17px] text-slate-700 leading-tight">
                        Featured on your product's tags
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex w-full'>
                <div className="w-full p-4 sm:p-6 bg-white border border-slate-200 rounded-3xl shadow-sm font-sans"
                  style={{ borderColor: selectedPlan === "standard" ? "#474BFF" : "#D9DAEC"}}
                  onClick={() => {setselectedPlan("standard")}}>
                  <div className="mb-6">
                    <div className='flex justify-between'>
                      <h2 className="text-xl font-medium text-slate-800 mb-1">Standard</h2>
                      {selectedPlan === "standard" && (
                        <div className='flex justify-between'>
                          <CheckCircle className="text-[#474BFF] w-3 h-3 mt-2 mr-1" />
                          <p className='text-[#474BFF] text-xs mt-1.5'>SELECTED</p>
                        </div>)}
                    </div>
                    <p className="text-[17px] text-slate-500 mb-4">Main Stage</p>
                    <div className='flex'>
                      <Star className="fill-[#F0AB1A] text-[#F0AB1A] w-5 h-5" />
                      <Star className="fill-[#F0AB1A] text-[#F0AB1A] w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-baseline mb-3">
                    <span className="text-2xl font-medium text-slate-800">$29.99</span>
                    <span className="text-slate-500 ml-2 text-lg">/ month</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-4">
                      <Plus className="w-6 h-6 text-slate-700 shrink-0 mt-0.5" />
                      <span className="text-[17px] text-slate-700">Everything on Basic</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Search className="w-6 h-6 mt-2 text-slate-700 shrink-0" />
                      <span className="text-[17px] text-slate-700 leading-tight">
                        Featured on Product Finder Home Page
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex w-full'>
                <div className="w-full p-4 sm:p-6 bg-white border border-slate-200 rounded-3xl shadow-sm font-sans"
                  style={{ borderColor: selectedPlan === "premium" ? "#474BFF" : "#D9DAEC"}}
                  onClick={() => {setselectedPlan("premium")}}>
                  <div className="mb-6">
                    <div className='flex justify-between'>
                      <h2 className="text-xl font-medium text-slate-800 mb-1">Premium</h2>
                      {selectedPlan === "premium" && (
                        <div className='flex justify-between'>
                          <CheckCircle className="text-[#474BFF] w-3 h-3 mt-2 mr-1" />
                          <p className='text-[#474BFF] text-xs mt-1.5'>SELECTED</p>
                        </div>)}
                    </div>
                    <p className="text-[17px] text-slate-500 mb-4">Global Spotlight</p>
                    <div className='flex'>
                      <Star className="fill-[#F0AB1A] text-[#F0AB1A] w-5 h-5" />
                      <Star className="fill-[#F0AB1A] text-[#F0AB1A] w-5 h-5" />
                      <Star className="fill-[#F0AB1A] text-[#F0AB1A] w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-baseline mb-3">
                    <span className="text-2xl font-medium text-slate-800">$49.99</span>
                    <span className="text-slate-500 ml-2 text-lg">/ month</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4">
                      <Plus className="w-6 h-6 text-slate-700 shrink-0 mt-0.5" />
                      <span className="text-[16px] text-slate-700">Everything on Standard</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Home className="w-6 h-6 mt-2 text-slate-700 shrink-0" />
                      <span className="text-[16px] text-slate-700 leading-tight">
                        Featured on 10015.io home page
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Package className="w-6 h-6 text-slate-700 shrink-0 mt-3" />
                      <span className="text-[16px] text-slate-700 leading-tight">
                        Featured on all product detail pages
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {selectedProduct && (
              visibleProducts.filter(product => product.name === selectedProduct).map(prop => (
                <div key={prop.name} className='flex flex-col lg:flex-row justify-between mt-9 gap-6'>
                  <div className='w-full lg:w-auto'>
                    <h4 className='text-xl text-[#26274B] font-bold mb-3'>Preview</h4>
                    <div className='relative text-white bg-white w-full lg:w-101.5 lg:h-115 border rounded-xl border-slate-200'>
                      {selectedPlan === "lite" && (<div className='absolute top-3 right-3 flex border-[#474BFF] bg-[#474BFF] w-22 px-1.5 py-0.5 border rounded font-semibold z-20'>
                        <Star className='text-white w-3.25 h-3.25 fill-white items-end mt-1.5 mr-1' />
                        <p className='text-white text-[15px]'>Boosted</p>
                      </div>)}
                      {selectedPlan === "basic" && (<div className='absolute top-3 right-3 flex border-[#474BFF] bg-[#474BFF] w-22.75 px-1.5 py-0.5 border rounded font-semibold z-20'>
                            <Star className='text-[#F0AB1A] w-3.25 h-3.25 fill-[#F0AB1A] mt-1.5 mr-1' />
                            <p className='text-white text-[14px]'>Featured</p>
                          </div>)}
                      {selectedPlan === "standard" && (<div className='absolute top-3 right-3 flex border-[#474BFF] bg-[#474BFF] w-26 px-1.5 py-0.5 border rounded font-semibold z-20'>
                            <Star className='text-[#F0AB1A] w-3.25 h-3.25 fill-[#F0AB1A] mt-1.5 mr-1' />
                            <Star className='text-[#F0AB1A] w-3.25 h-3.25 fill-[#F0AB1A] mt-1.5 mr-1' />
                            <p className='text-white text-[14px]'>Featured</p>
                          </div>)}
                      {selectedPlan === "premium" && (<div className='absolute top-3 right-3 flex border-[#474BFF] bg-[#474BFF] w-30 px-1.5 py-0.5 border rounded font-semibold z-20'>
                            <Star className='text-[#F0AB1A] w-3.25 h-3.25 fill-[#F0AB1A] mt-1.5 mr-1' />
                            <Star className='text-[#F0AB1A] w-3.25 h-3.25 fill-[#F0AB1A] mt-1.5 mr-1' />
                            <Star className='text-[#F0AB1A] w-3.25 h-3.25 fill-[#F0AB1A] mt-1.5 mr-1' />
                            <p className='text-white text-[14px]'>Featured</p>
                          </div>)}
                      <img src={prop.image} alt="preview" className='z-9 w-full h-auto border rounded-t-xl' />
                      <div className='p-4 sm:p-6'>
                        <div className='flex mb-3'>
                          <img src={prop.icon} alt="logo" className='w-7.5 h-7.5 mr-3' />
                          <div>
                            <h1 className='text-[#444564] font-bold text-xl -mt-3'>{prop.name}</h1>
                            <p className='text-[#8383A0] text-[14px]'>{prop.tagline}</p>
                          </div>
                        </div>
                        <p className='text-[#8383A0] text-[15px] line-clamp-2'>{prop.shortDescription}</p>
                        <div className='mt-4 flex flex-wrap w-fit gap-1.5'>
                          {prop.tags.map((tag, idx) => (
                            <p key={idx} className="text-[#8383A0] p-1 bg-[#EEF2FF] rounded-2xl text-[13px] font-medium">
                              #{tag.name}
                            </p>
                          ))}
                        </div>
                      </div>
                      <hr className='text-[#ebe8e8]' />
                      <div className='h-16 flex justify-between pt-2 px-5'>
                        <div className='flex'>
                          <CheckCircle className='w-4 h-4 mr-2 text-[#8383A0]' />
                          <p className='text-[#8383A0] text-[16px] -mt-1 -ml-1'>{prop.pricing}</p>
                        </div>
                        <p className='text-[#8383A0] -mt-1 text-[16px]'>Visit</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-full lg:w-auto'>
                    <h4 className='text-xl text-[#26274B] font-bold mb-3 text-start'>Summary</h4>
                    {selectedPlan ? (
                      <div className='w-full lg:w-162.5 lg:h-115 border border-slate-200 rounded-xl px-7 py-8 bg-white'>
                        <p className='text-[#26274B] text-[18px] font-medium'>Selected Package: {selectedPlan}</p>
                        <p className='text-[#26274B] text-[16px] mt-4'>Your product will be:</p>
                        {packageDetail
                          .filter(pkg => pkg[selectedPlan])
                          .map((pkg, pkgIndex) => 
                            pkg[selectedPlan].map((item, index) => (
                              <p key={`${pkgIndex}-${index}`} className='text-[#26274B] text-[16px] mt-3'>
                                {item}
                              </p>
                            ))
                          )}
                      </div>
                    ) : (
                      <div className='w-full lg:w-162.5 lg:h-115 border border-slate-200 rounded-xl px-7 py-8 bg-white'>
                        <p className='text-[#26274B] text-[16px] mt-3'>No package Selected</p>
                      </div>
                    )}
                  </div>
                </div>
              )))}
            <p className='text-[#26274B] mt-8 text-[18px] cursor-pointer'>Please select a product & package to see the preview & summary.</p>
            <div className='w-full flex justify-center'>
              <button className='py-2.5 text-[18px] font-medium w-fit px-11 mt-10 bg-[#474BFF] text-white border rounded-3xl cursor-pointer'
                      onClick={() => {payment()}}>Proceed to Payment</button>
            </div>
          </div>
        </div>
      </div>
      
      {popUp && (
        <div className='flex flex-col items-center z-10'
          onClick={() => {setPopUp(false)}}>
          <X className='w-7.5 h-7.5 fixed top-4 right-4 z-50 flex items-end cursor-pointer text-[#868686] hover:text-[#cfcfcf]'/>
          <div className='fixed inset-0 flex justify-center z-40 flex-col items-center bg-[#5A6075]/50 px-4'>
            <div className='bg-white p-4 sm:p-7 rounded-xl border-white border w-full max-w-3xl'
              onClick={(e) => e.stopPropagation()}>
              <h3 className='text-start text-[#474BFF] w-full text-2xl font-medium mb-4'>Frequenty Asked Questions</h3>
              <p className='text-[18px] font-medium mb-1'>- How are featured products sorted?</p>
              <p className='text-[17px] mb-3 text-[#26274B]'>If multiple featured products are displayed, they will first be sorted by their package level:</p>
              <p className='text-[17px] mb-3 text-[#26274B]'>Premium {'>'} Standard {'>'} Basic.</p>
              <p className='text-[17px] leading-8 text-[#26274B]'>Within each package level, products will be sorted randomly to ensure each product has a fair chance of being at the top. This random order will be reset on every page reload, resulting in a different arrangement each time.</p>
            </div>
          </div>
        </div>
      )}
    </div>    

  )
}

export default GetSubmit
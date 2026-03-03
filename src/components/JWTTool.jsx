import { useState, useEffect, useRef } from 'react';
import { ChevronDown, PlusCircle, MinusCircle, RotateCcw, Copy, ExternalLink, ChevronRight, ArrowRight, X, Check, HelpCircle } from 'lucide-react';
import * as jose from 'jose';

const JWTTool = () => {
    const [activeTab, setActiveTab] = useState('encoder');
    const [algo, setAlgo] = useState('HS256');
    const [isClaimsVisible, setIsClaimsVisible] = useState(false);
    const [isVerifyChecked, setIsVerifyChecked] = useState(false);
    const [signingKey, setSigningKey] = useState('');
    const [autoIat, setAutoIat] = useState(true);
    const [iatValue, setIatValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState(null);
    const [keyError, setKeyError] = useState(false);

    // --- Custom Dropdown State ---
    const [isAlgoOpen, setIsAlgoOpen] = useState(false);
    const algoRef = useRef(null);

    // --- Functional States ---
    const [jsonInput, setJsonInput] = useState('');
    const [jwtOutput, setJwtOutput] = useState('');
    const [decodedPayload, setDecodedPayload] = useState(null);
    const [decodedHeader, setDecodedHeader] = useState(null);
    const [claims, setClaims] = useState({
        exp: '', nbf: '', sub: '', iss: '', aud: '', jti: ''
    });

    const isDecoder = activeTab === 'decoder';
    const inputsDisabled = isDecoder && !isVerifyChecked;

    // Handle click outside for dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (algoRef.current && !algoRef.current.contains(event.target)) setIsAlgoOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setJwtOutput('');
        setDecodedPayload(null);
        setDecodedHeader(null);
        setKeyError(false);
        setJsonInput('');
    }, [activeTab]);

    const rsKeys = {
        pub: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0/IzW7yWR7QkrmBL7jTKEn5u+qKhbwKfBstIs+bMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyehkd3qqGElvW/VDL5AaWTg0nLVkjRo9z+40RQzuVaE8AkAFmxZzow3x+VJYKdjykkJ0iT9wCS0DRTXu269V264Vf/3jvredZiKRkgwlL9xNAwxXFg0x/XFw005UWVRIkdgcKWTjpBP2dPwVZ4WWC+9aGVd+Gyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbcmwIDAQAB\n-----END PUBLIC KEY-----',
        priv: '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC7VJTUt9Us8cKjMzEfYyjiWA4R4/M2bS1GB4t7NXp98C3SC6dVMvDuictGeurT8jNbvJZHtCSuYEvuNMoSfm76oqFvAp8Gy0iz5sxjZmSnXyCdPEovGhLa0VzMaQ8s+CLOyS56YyCFGeJZqgtzJ6GR3eqoYSW9b9UMvkBpZODSctWSNGj3P7jRFDO5VoTwCQAWbFnOjDfH5Ulgp2PKSQnSJP3AJLQNFNe7br1XbrhV//eO+t51mIpGSDCUv3E0DDFcWDTH9cXDTTlRZVEiR2BwpZOOkE/Z0/BVnhZYL71oZV34bKfWjQIt6V/isSMahdsAASACp4ZTGtwiVuNd9tybAgMBAAECggEBAKTmjaS6tkK8BlPXClTQ2vpz/N6uxDeS35mXpqasqskVlaAidgg/sWqpjXDbXr93otIMLlWsM+X0CqMDgSXKejLS2jx4GDjI1ZTXg++0AMJ8sJ74pWzVDOfmCEQ/7wXs3+cbnXhKriO8Z036q92Qc1+N87SI38nkGa0ABH9CN83HmQqt4fB7UdHzuIRe/me2PGhIq5ZBzj6h3BpoPGzEP+x3l9YmK8t/1cN0pqI+dQwYdgfGjackLu/2qH80MCF7IyQaseZUOJyKrCLtSD/Iixv/hzDEUPfOCjFDgTpzf3cwta8+oE4wHCo1iI1/4TlPkwmXx4qSXtmw4aQPz7IDQvECgYEA8KNThCO2gsC2I9PQDM/8Cw0O983WCDY+oi+7JPiNAJwv5DYBqEZB1QYdj06YD16XlC/HAZMsMku1na2TN0driwenQQWzoev3g2S7gRDoS/FCJSI3jJ+kjgtaA7Qmzlgk1TxODN+G1H91HW7t0l7VnL27IWyYo2qRRK3jzxqUiPUCgYEAx0oQs2reBQGMVZnApD1jeq7n4MvNLcPvt8b/eU9iUv6Y4Mj0Suo/AU8lYZXm8ubbqAlwz2VSVunD2tOplHyMUrtCtObAfVDUAhCndKaA9gApgfb3xw1IKbuQ1u4IF1FJl3VtumfQn//LiH1B3rXhcdyo3/vIttEk48RakUKClU8CgYEAzV7W3COOlDDcQd935DdtKBFRAPRPAlspQUnzMi5eSHMD/ISLDY5IiQHbIH83D4bvXq0X7qQoSBSNP7Dvv3HYuqMhf0DaegrlBuJllFVVq9qPVRnKxt1Il2HgxOBvbhOT+9in1BzA+YJ99UzC85O0Qz06A+CmtHEy4aZ2kj5hHjECgYEAmNS4+A8Fkss8Js1RieK2LniBxMgmYml3pfVLKGnzmng7H2+cwPLhPIzIuwytXywh2bzbsYEfYx3EoEVgMEpPhoarQnYPukrJO4gwE2o5Te6T5mJSZGlQJQj9q4ZB2Dfzet6INsK0oG8XVGXSpQvQh3RUYekCZQkBBFcpqWpbIEsCgYAnM3DQf3FJoSnXaMhrVBIovic5l0xFkEHskAjFTevO86Fsz1C2aSeRKSqGFoOQ0tmJzBEs1R6KqnHInicDTQrKhArgLXX4v3CddjfTRJkFWDbE/CkvKZNOrcf1nhaGCPspRJj2KUkj1Fhl9Cncdn/RsYEONbwQSjIfMPkvxF+8HQ==\n-----END PRIVATE KEY-----'
    };

    const modalData = [
        { title: 'HS256', desc: 'Secret key (Ideal: 32 characters)', type: 'hmac', key: 'Dw/G:+@%VR[a$LV,D4L{5+(4I}+zf+ER' },
        { title: 'HS384', desc: 'Secret key (Ideal: 48 characters)', type: 'hmac', key: "h},Gd'hzh~Lar72u0xAIlCL$[9g,e6Za{7vQ5H/_GT>12Qj?" },
        { title: 'HS512', desc: 'Secret key (Ideal: 64 characters)', type: 'hmac', key: 'Prs5bR2t%vWT>m+?syisEh0f2h+?/CDz=sA[:Y9CSWAjdZv&oF1x8g*TT_76<QSI' },
        { title: 'RS256 / RS384 / RS512', desc: 'Public and private keys (RSA)', type: 'asymmetric', publicKey: rsKeys.pub, privateKey: rsKeys.priv },
        { title: 'ES256', desc: 'Public and private keys (ECDSA)', type: 'asymmetric', publicKey: 'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEVs/o5+uQbTjL3chynL4wXgUg2R9q9UU8I5mEovUf86QZ7kOBIjJwqnzD1omageEHWwHdBO6B+dFabmdT9POxg==', privateKey: 'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgevZzL1gdAFr88hb2OF/2NxApJCzGCEDdfSp6VQO30hyhRANCAAQRWz+jn65BtOMvdyHKcvjBeBSDZH2r1RTwjmYSi9R/zpBnuQ4EiMnCqfMPWiZqB4QdbAd0E7oH50VpuZ1P087G' },
        { title: 'ES384', desc: 'Public and private keys (ECDSA)', type: 'asymmetric', publicKey: 'MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEC1uWSXj2czCDwMTLWV5BFmwxdM6PX9p+Pk9Yf9rIf374m5XP1U8q79dBhLSIuaojsvOT39UUcPJROSD1FqYLued0rXiooIii1D3jaW6pmGVJFhodzC31cy5sfOYotrzF', privateKey: 'MIG2AgEAMBAGByqGSM49AgEGBSuBBAAiBIGeMIGbAgEBBDCAHpFQ62QnGCEvYh/pE9QmR1C9aLcDItRbslbmhen/h1tt8AyMhskeenT+rAyyPhGhZANiAAQLW5ZJePZzMIPAxMtZXkEWbDF0zo9f2n4+T1h/2sh/fviblc/VTyrv10GEtIi5qiOy85Pf1RRw8lE5IPUWpgu553SteKigiKLUPeNpbqmYZUkWGh3MLfVzLmx85ii2vMU=' },
        { title: 'ES512', desc: 'Public and private keys (ECDSA)', type: 'asymmetric', publicKey: 'MIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQBgc4HZz+/fBbC7lmEww0AO3NK9wVZPDZ0VEnsaUFLEYpTzb90nITtJUcPUbvOsdZIZ1Q8fnbquAYgxXL5UgHMoywAib476MkyyYgPk0BXZq3mq4zImTRNuaU9slj9TVJ3ScT3L1bXwVuPJDzpr5GOFpaj+WwMAl8G7CqwoJOsW7Kddns=', privateKey: 'MIHuAgEAMBAGByqGSM49AgEGBSuBBAAjBIHWMIHTAgEBBEIBiyAa7aRHFDCh2qga9sTUGINE5jHAFnmM8xWeT/uni5I4tNqhV5Xx0pDrmCV9mbroFtfEa0XVfKuMAxxfZ6LM/yKhgYkDgYYABAGBzgdnP798FsLuWYTDDQA7c0r3BVk8NnRUSexpQUsRilPN v3SchO0lRw9Ru86x1khnVDx+duq4BiDFcvlSAcyjLACJvjvoyTLJiA+TQFdmrearjMiZNE25pT2yWP1NUndJxPcvVtfBW48kPOmvkY4WlqP5bAwCXwbsKrCgk6xbsp12ew==' }
    ];

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (autoIat) setIatValue(Math.floor(Date.now() / 1000).toString());
    }, [autoIat, isClaimsVisible]);

    const handleCopy = (text, id) => {
        if (!text) return;
        navigator.clipboard.writeText(typeof text === 'object' ? JSON.stringify(text, null, 2) : text);
        setCopiedKey(id);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    const applySampleKey = () => {
        setKeyError(false);
        if (algo.startsWith('HS')) {
            const found = modalData.find(m => m.title === algo);
            setSigningKey(found?.key || '');
        } else if (algo.startsWith('RS')) {
            setSigningKey(rsKeys.priv);
        } else if (algo.startsWith('ES')) {
            const found = modalData.find(m => m.title.includes(algo));
            setSigningKey(found?.privateKey || '');
        }
    };

    const handleProcess = async () => {
        if ((!isDecoder || (isDecoder && isVerifyChecked)) && !signingKey.trim()) {
            setKeyError(true);
            return;
        }
        setKeyError(false);
        if (isDecoder) decodeJWT(); else encodeJWT();
    };

    const encodeJWT = async () => {
        try {
            let payload = JSON.parse(jsonInput || '{}');
            if (autoIat) payload.iat = parseInt(iatValue) || Math.floor(Date.now() / 1000);
            if (claims.exp) payload.exp = Math.floor(Date.now() / 1000) + parseInt(claims.exp);
            if (claims.nbf) payload.nbf = parseInt(claims.nbf);
            if (claims.sub) payload.sub = claims.sub;
            if (claims.iss) payload.iss = claims.iss;
            if (claims.aud) payload.aud = claims.aud;
            if (claims.jti) payload.jti = claims.jti;

            const protectedHeader = { alg: algo, typ: "JWT" };
            let jwt;
            if (algo.startsWith('HS')) {
                const secret = new TextEncoder().encode(signingKey);
                jwt = await new jose.SignJWT(payload).setProtectedHeader(protectedHeader).sign(secret);
            } else {
                const privateKey = await jose.importPKCS8(signingKey, algo);
                jwt = await new jose.SignJWT(payload).setProtectedHeader(protectedHeader).sign(privateKey);
            }
            setJwtOutput(jwt);
            setDecodedPayload(payload);
            setDecodedHeader(protectedHeader);
        } catch (err) { console.error(err); }
    };

    const decodeJWT = async () => {
        try {
            const jwt = jsonInput.trim();
            if (!jwt) return;
            const header = jose.decodeProtectedHeader(jwt);
            setDecodedHeader(header);
            let payload;
            if (isVerifyChecked) {
                if (algo.startsWith('HS')) {
                    const secret = new TextEncoder().encode(signingKey);
                    const res = await jose.jwtVerify(jwt, secret);
                    payload = res.payload;
                } else {
                    const publicKey = await jose.importSPKI(signingKey, algo);
                    const res = await jose.jwtVerify(jwt, publicKey);
                    payload = res.payload;
                }
            } else {
                payload = jose.decodeJwt(jwt);
            }
            setDecodedPayload(payload);
            setJwtOutput(jwt);
        } catch {
            setDecodedPayload({ error: "Invalid JWT or Key" });
        }
    };

    const resetTool = () => {
        setJsonInput('');
        setJwtOutput('');
        setDecodedPayload(null);
        setDecodedHeader(null);
        setSigningKey('');
        setAlgo('HS256');
        setKeyError(false);
        setIsClaimsVisible(false);
        setClaims({ exp: '', nbf: '', sub: '', iss: '', aud: '', jti: '' });
        setAutoIat(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-manrope">
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm font-manrope">
                    <div className="bg-white w-full max-w-2xl max-h-[70vh] rounded-lg shadow overflow-hidden flex flex-col relative">
                        <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 p-2 hover:bg-slate-100 rounded-full text-slate-400 z-10"><X size={20} /></button>
                        <div className="p-8 overflow-y-auto scrollbar-hide space-y-10">
                            {modalData.map((item, idx) => (
                                <div key={idx} className="space-y-4">
                                    <h3 className="text-[#4f46e5] font-bold text-xl">{item.title}</h3>
                                    <p className="text-slate-500 text-sm -mt-2.5">{item.desc}</p>
                                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 font-mono text-sm text-slate-600 break-all h-14 overflow-y-auto scrollbar-thin">
                                        {item.key || item.privateKey}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-5xl mx-auto">
                <div className="flex justify-center mb-8">
                    <div className="bg-[#e2e8f0]/50 p-1 rounded-xl flex w-full max-w-sm border border-slate-200">
                        <button onClick={() => setActiveTab('encoder')} className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${!isDecoder ? 'bg-[#4f46e5] text-white shadow-lg' : 'text-slate-500'}`}> Encoder </button>
                        <button onClick={() => setActiveTab('decoder')} className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${isDecoder ? 'bg-[#4f46e5] text-white shadow-lg' : 'text-slate-500'}`}> Decoder </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
                    <div className="md:col-span-3">
                        {/* --- CUSTOM ALGO SELECT --- */}
                        <div ref={algoRef} className={`relative bg-white border ${keyError ? 'border-red-500 ring-1 ring-red-100' : 'border-slate-200'} rounded-lg px-3 pt-5 pb-2 ${inputsDisabled ? 'opacity-50' : 'cursor-pointer'}`} onClick={() => !inputsDisabled && setIsAlgoOpen(!isAlgoOpen)}>
                            <span className="absolute top-1.5 left-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider select-none">Algorithm</span>
                            <div className="w-full flex items-center justify-between text-slate-700 font-medium text-sm">
                                <span>{algo}</span>
                                <ChevronDown size={16} className={`text-slate-400 transition-transform duration-200 ${isAlgoOpen ? "rotate-180" : ""}`} />
                            </div>
                            {isAlgoOpen && (
                                <div className="absolute top-[105%] left-0 right-0 bg-white border border-slate-200 rounded-lg shadow z-50 max-h-60 overflow-y-auto p-1.5 animate-in fade-in zoom-in-95 duration-150">
                                    {['HS256', 'HS384', 'HS512', 'RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512'].map((a) => (
                                        <div key={a} onClick={(e) => { e.stopPropagation(); setAlgo(a); setIsAlgoOpen(false); }} className={`px-3 py-2 text-sm rounded-md transition-all flex items-center justify-between mb-0.5 ${algo === a ? "bg-indigo-50 text-indigo-700 font-bold" : "text-slate-600 hover:bg-slate-100 hover:pl-4"}`}>
                                            {a} {algo === a && <Check size={14} className="text-indigo-600" />}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        <div className="mt-3 px-1">
                            {!isDecoder ? (
                                <div className="space-y-1">
                                    <button onClick={() => setIsModalOpen(true)} className="text-[13px] text-indigo-600 flex items-center gap-1 hover:underline font-bold">Key Formats (Examples) <ExternalLink size={13} /></button>
                                    <button onClick={applySampleKey} className="text-[13px] text-indigo-600 flex items-center gap-1 hover:underline font-bold">Use Sample Key <ChevronRight size={13} /></button>
                                </div>
                            ) : (
                                <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 cursor-pointer">
                                    <input type="checkbox" checked={isVerifyChecked} onChange={(e) => setIsVerifyChecked(e.target.checked)} className="w-4 h-4 rounded border-slate-300 accent-indigo-600" /> Verify JWT Key?
                                </label>
                            )}
                        </div>
                    </div>

                    <div className="md:col-span-9">
                        <div className={`bg-white p-4 rounded-lg border ${keyError ? 'border-red-500' : 'border-slate-200'} h-full relative ${inputsDisabled ? 'opacity-50' : ''}`}>
                            <label className="text-[10px] font-bold text-slate-400 uppercase absolute top-2 left-4 tracking-wider">{isDecoder ? 'Secret / Public Key' : 'Signing Key (Required) *'}</label>
                            <textarea disabled={inputsDisabled} value={signingKey} onChange={(e) => { setSigningKey(e.target.value); setKeyError(false); }} className="w-full h-20 mt-4 bg-transparent outline-none text-slate-600 font-manrope text-sm resize-none scrollbar-hide" placeholder={inputsDisabled ? "Enable 'Verify JWT Key' to edit" : "Paste your signing key here..."} />
                            {keyError && <span className="absolute bottom-2 right-4 text-[9px] text-red-500 font-bold uppercase tracking-tighter">Key Required</span>}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg border border-slate-200 p-5 h-80 flex flex-col">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 block">{!isDecoder ? 'JSON Input' : 'Encoded JWT'}</label>
                        <textarea value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} className="flex-1 w-full bg-transparent outline-none text-slate-600 text-sm resize-none" placeholder={isDecoder ? "Paste JWT here..." : "Enter JSON payload..."} />
                    </div>
                    <div className="flex flex-col gap-4 h-80">
                        <div className="bg-white rounded-lg border border-slate-200 p-4 flex-1 overflow-hidden relative group">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">{isDecoder ? 'JWT Payload' : 'JWT'}</label>
                            <div className="text-slate-600 text-[11px] break-all overflow-y-auto max-h-full whitespace-pre-wrap">
                                {isDecoder ? (decodedPayload ? JSON.stringify(decodedPayload, null, 2) : <span className="text-slate-400 italic">Payload details...</span>) : (jwtOutput || <span className="text-slate-400 italic">Result will appear here...</span>)}
                            </div>
                        </div>
                        <div className="bg-white rounded-lg border border-slate-200 p-4 flex-1 overflow-hidden">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">{isDecoder ? 'JWT Header' : 'Payload Preview'}</label>
                            <div className="text-slate-600 text-[11px] break-all overflow-y-auto max-h-full whitespace-pre-wrap">
                                {isDecoder ? (decodedHeader ? JSON.stringify(decodedHeader, null, 2) : <span className="text-slate-400 italic">Header details...</span>) : (decodedPayload ? JSON.stringify(decodedPayload, null, 2) : <span className="text-slate-400 italic">Payload preview...</span>)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:grid md:grid-cols-3 gap-4 items-center">
                    <div className="order-1 md:order-2 flex justify-center w-full">
                        <button onClick={handleProcess} className="w-full md:w-auto md:px-8 py-3 bg-indigo-600 text-white rounded-full font-bold hover:scale-105 transition-all flex items-center justify-center gap-2">
                            {isDecoder ? 'Decode' : 'Encode'} <ArrowRight size={18} />
                        </button>
                    </div>
                    <div className="order-2 md:order-3 flex items-center gap-2 w-full md:justify-end">
                        <button onClick={resetTool} className="flex-1 md:flex-none flex justify-center items-center gap-2 px-8 py-3 border border-gray-300 text-slate-600 font-bold rounded-full hover:bg-slate-50 transition text-sm"><RotateCcw size={16} /> Reset</button>
                        <button onClick={() => handleCopy(isDecoder ? decodedPayload : jwtOutput, 'main-copy')} className="flex-1 md:flex-none flex items-center justify-center gap-2 border-2 border-indigo-500 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 font-bold text-sm">
                            {copiedKey === 'main-copy' ? <Check size={16} /> : <Copy size={16} />} {isDecoder ? 'Copy JSON' : 'Copy JWT'}
                        </button>
                    </div>
                    <div className="order-3 md:order-1 flex items-center gap-3 w-full md:justify-start">
                        {!isDecoder && (
                            <div className="flex items-center gap-2 w-full">
                                <button onClick={() => setIsClaimsVisible(!isClaimsVisible)} className={`flex items-center justify-center gap-2 text-indigo-600 font-bold text-sm border-2 border-indigo-100 hover:border-indigo-500 py-3 rounded-full hover:bg-indigo-50 transition-all ${isClaimsVisible ? 'flex-1 md:flex-none md:w-48' : 'w-full md:w-48'}`}>
                                    Add Claims {isClaimsVisible ? <MinusCircle size={18} /> : <PlusCircle size={18} />}
                                </button>
                                {isClaimsVisible && (
                                    <button onClick={() => window.open('https://auth0.com/docs/security/tokens/json-web-tokens/json-web-token-claims', '_blank')} className="flex items-center gap-1 text-slate-400 hover:text-indigo-600 transition-colors text-xs font-bold animate-in fade-in duration-300"><HelpCircle size={14} /> Help</button>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {isClaimsVisible && !isDecoder && (
                    <div className="max-w-md mt-6 rounded-lg animate-in fade-in slide-in-from-top-4">
                        <div className="flex items-center gap-3 mb-6">
                            <input type="checkbox" checked={autoIat} onChange={(e) => setAutoIat(e.target.checked)} className="w-5 h-5 rounded border-slate-300 text-indigo-600 cursor-pointer accent-indigo-600" />
                            <span className="text-sm font-semibold text-slate-600 italic">Auto-set "Issued at (iat)"*</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className={`bg-white rounded-lg p-3 border border-slate-300 ${autoIat ? 'opacity-60' : ''}`}><label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Issued at (iat)</label>
                                <input type="text" disabled={autoIat} value={iatValue} onChange={(e) => setIatValue(e.target.value)} placeholder="iat" className="w-full bg-transparent outline-none text-sm text-slate-600 font-medium" />
                            </div>
                            {[{ label: 'Expires in (sec)', key: 'exp' }, { label: 'Not before time (nbf)', key: 'nbf' }, { label: 'Subject (sub)', key: 'sub' }, { label: 'Issuer (iss)', key: 'iss' }, { label: 'Audience (aud)', key: 'aud' }, { label: 'JWT ID (jti)', key: 'jti' }].map((claim) => (
                                <div key={claim.key} className="bg-white rounded-lg p-4 border border-slate-300">
                                    <input type="text" value={claims[claim.key]} onChange={(e) => setClaims({ ...claims, [claim.key]: e.target.value })} placeholder={claim.label} className="w-full bg-white outline-none text-sm text-slate-600 font-medium" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JWTTool;
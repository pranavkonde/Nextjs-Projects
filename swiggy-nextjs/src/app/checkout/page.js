"use client";

import { useState } from 'react';
import ProductsComponent from '../components/productComponent';
import AddressForm from '../components/addressForm';
import CheckoutComponent from '../components/checkoutComponent';
import Header from "../components/navbar/index"
import Footer from '../components/footer';


export default function CartPage() {
  const [step, setStep] = useState('products');

  const goToAddress = () => setStep('address');
  const goToCheckout = () => setStep('checkout');

  return (
    <>
    <Header />
    <div>
      <div style={{display:'flex',alignItems:'center', justifyContent:'center',gap:'150px', color:'zinc',marginTop:'-75px'}}>
        <button onClick={() => setStep('products')}><svg width="70px" height="70px"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="19" r="1.5" stroke="#000000"/>
<circle cx="17" cy="19" r="1.5" stroke="#000000"/>
<path d="M3.5 4H5.5L9.00446 15H17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.22445 12.5L6.29862 6.5H18.8063C19.1476 6.5 19.3885 6.83435 19.2806 7.15811L17.614 12.1581C17.5459 12.3623 17.3548 12.5 17.1396 12.5H8.22445Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/></svg>Cart</button>
        <button onClick={() => setStep('address')}><svg width="50px" height="50px" viewBox="0 0 1024 1024" fill="#000000" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" fill="" /></svg>Address</button>
        <button onClick={() => setStep('checkout')}><img src="https://img.icons8.com/?size=100&id=78231&format=png&color=000000" width="60px" height="60px" alt="payment"></img>Checkout</button>
      </div>
      <hr />

      {step === 'products' && <ProductsComponent onNext={goToAddress} />}
      {step === 'address' && <AddressForm onNext={goToCheckout} />}
      {step === 'checkout' && <CheckoutComponent />}
      
    </div>
    <Footer />
    </>
    
  );
}

import React from 'react';
import './Footer.css'
// import Carousels from './carousels/carousels';
import FooterEnd from './FooterEndSettings/FooterEnd';
import Link from 'next/link';
export default function Footer() {
  return (<>

    <footer className="py-4" style={{backgroundColor:'#fef2e7'}}>

{/* <Carousels/> */}

<div className='container-fluid'>

<div className='row'>
<div className='col-lg-6 ps-5'>
<img src="js-logo_ed549a3c85eb1f115998.webp"  style={{width:' 15%'}}alt='jungle js' />
</div>
<div className='col-lg-6'>
<div className=' d-flex justify-content-end'>
<div className='w-50 pt-3'>

<img src="badge-emerald_91a1483b997d56626ac8.webp" className='' style={{width:'50%',}} alt="" />
<img src="badge-aws_0d0eaee069c4d60705fe.webp" className=''style={{width:'50%',}} alt="" />
</div>
</div>
</div>
  
</div>
</div>
  <div className="container-fluid">
 <div className="row ">
    <div className="col-md-6 ps-3">
      <div className="ps-5">
      <div className="w-50">
          <h4 className="fw-bold pt-2" style={{fontSize: '1.5em'}}>
            Accelerate your Amazon business today
          </h4>
        </div>
        <div className="pt-4">
          <p className="fw-semibold">For global brands and retailers</p>
          <Link href="/" className="text-decoration-none">Explore Jungle Scout Cobalt</Link>
        </div>
      </div>
    </div>


    <div className="col-md-6 d-flex flex-column flex-md-row pt-4">
      <div className="mb-5 mb-md-0 me-md-5">
        <h5 className="fw-medium">Products & Pricing</h5>
        <ul className="list-unstyled mt-3">
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Why Jungle Scout</Link></li>
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Jungle Scout API</Link></li>
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Jungle Scout Cobalt</Link></li>
          <li className='pt-2 w-75'><Link href="/" className="text-decoration-none text-dark  fw-light">Jungle Scout Data Cloud</Link></li>
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Plans & Pricing</Link></li>
        </ul>
      </div>

      <div className="mb-5 mb-md-0 me-md-5">
        <h5 className="fw-medium">Resources</h5>
        <ul className="list-unstyled mt-3">
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">All Resources</Link></li>
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Blog</Link></li>
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Reports</Link></li>
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Webinars</Link></li>
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Help Center</Link></li>
        </ul>
      </div>

      <div>
        
        <h5 className="fw-medium">Company</h5>
        <ul className="list-unstyled mt-3">
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">About Us</Link></li>
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Leadership</Link></li>
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Press</Link></li>
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Careers</Link></li>
          <li className='pt-2'><Link href="/" className="text-decoration-none text-dark  fw-light">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div  className='w-100'>

<div className=' d-flex justify-content-center align-items-center'>

<hr  style={{border:'2px solid black',width:'95%'}} className=''></hr>
</div>
</div>
<FooterEnd/>
    </footer>
  </>
  );
}


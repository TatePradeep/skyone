import './footer.css'
import FLogo from '../../assets/Finalized logo 1.png'
import skyonelogo from '../../assets/SkyOne.png'
import ELogo from '../../assets/arrow.png'

const Footer = () => {
  return (
    //main div
    <div className='footer'>
      {/* first div having logo div and address div */}
        <div className="logo-social">

            <div className="logo">
                <img src={FLogo} alt="" />
                <img className='skyone' src={skyonelogo} alt="" />
            </div>

            <div className="address">
               <p className='adr-title'>Address</p>
               {/* address-content div */}
               <div className='address-content'>
               <p className='detail-adr'>Marollem Street 32, 7th Floor, Newlight</p>
               <p className='detail-adr'>Road, New York, USA.</p>
               </div>
               {/* address-links div */}
               <div className='sm-links'>
               <a className='sm' href='#Instagram'>Instagram</a>
               <a className='sm' href='#Linkdin'>Linkdin</a>
               <a className='sm' href='#Careers'>Careers</a>
               </div>
            </div>
         </div>

{/* second div */}

        <div className="end">

            <div className="end-content">
              <p className='ec-p1'>Got A Project In Mind?</p>
              <p className='ec-p2'>LET’S TALK</p>
            </div>

            <div className="end-logo">
                <img src={ELogo} alt="arrow" />
            </div>
        </div>

    </div>
  )
}

export default Footer
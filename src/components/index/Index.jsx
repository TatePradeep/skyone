import React from 'react'
import './index.css'
import frame from '../../assets/Project index frame 1.png'
import leftmask from '../../assets/Project index page left mask.png'
import rightmask from '../../assets/Project index page right mask.png'


const Index = () => {
  return (<>
    <div className='skyone__index-leftframe'>
<img src={leftmask}/>
            </div>
            <div className='skyone__index-rightframe'>
<img src={rightmask}/>
            </div>

    <div className='skyone__index-container'>
         <div className='skyone__index-frame'>
                <img src={frame}/>
            </div>
         <div className='links'>
  <a href='#'>TATVA</a>
  <a href='#'>HOOMANS</a>
  <a href='#'>PASCO</a>
  <a href='#'>FUJI ADMIN OFFICE</a>
  <a href='#'>CHORDIYA BUILDER</a>
  <a href='#'>FUJI OFFICE</a>
  <a href='#'>FUJI CEO OFFICE</a>
  <a href='#'>FUJI ENGINEERING DEPT.</a>
  <a href='#'>ZMART BUILD</a>
  <a href='#'>SKYONE OFFICE</a>
       </div>
      
    </div>
    </>
  )
}

export default Index

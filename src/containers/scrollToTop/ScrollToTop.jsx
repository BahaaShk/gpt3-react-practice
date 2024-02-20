import React from 'react'
import './scrollToTop.css'
import {AiOutlineArrowUp} from 'react-icons/ai'

const ScrollToTop = () => {
   const [backToTop, setBackToTop] = React.useState(false);
   React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
   }, [])

   function handleScroll(){
    window.scrollY > 100 ? setBackToTop(true) : setBackToTop(false)
   }

   function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',

    })
   }
  return (
    <div>
        {
           backToTop && (
            <div className='gpt3__scroll animate__animated animate__bounce' onClick={scrollUp}>
                <AiOutlineArrowUp 
                size={20}
                fontWeight='700'
                className=' animate__animated animate__pulse'/>
            </div>
           ) 
        }
    </div>
  )
}

export default ScrollToTop
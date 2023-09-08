import React from 'react';
import { useEffect, useState } from 'react';

function BackToTopBtn (){
const [backToTopBtn, setBackToTopBtn] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () =>{
            if(window.scrollY > 100) {
        setBackToTopBtn(true)
    } else{
        setBackToTopBtn(false)
    }
    })

}, [])

function scrollUp (){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

    return(
        <div>
            {backToTopBtn && (
                <button className='backToTopButton' onClick={scrollUp}> <i class="fas fa-angle-up"></i>
                </button>
            )
            }
        </div>
    )
}


export default BackToTopBtn;
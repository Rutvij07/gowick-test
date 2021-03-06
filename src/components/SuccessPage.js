import React from 'react'


function SuccessPage () { 

    return (
        <div className='mt-4'>
            {list.map(value=>{
                return(
                    <div key={value.heading} className='d-flex align-items-center'>
                        <div>
                            <img width="50px" src={value.icon}  alt={value.alt}/>
                        </div>
                        <div className='ml-3 text-left'>
                            <p><b>{value.heading}</b></p>
                            <p className='mt-1'>{value.subHeading}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const list = [
    {
        icon:'whatsapp-notification.png',
        alt:'whatsapp-notification',
        heading:'Where will I get the gift card?',
        subHeading:'You will receive it on Whatsapp/SMS on your mobile'
    },   
    {
        icon:'gift-card.png',
        alt:'gift-card',
        heading:'When will I receive the gift card?',
        subHeading:'Within 48 hours, when your Man Matters order is delivered'
    },   
    {
        icon:'wrong.png',
        alt:'wrong',
        heading:'What if I cancel the order?',
        subHeading:'The voucher will not delivered if you cancel the order'
    },   
]

export default SuccessPage;
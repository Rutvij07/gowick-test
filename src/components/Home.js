import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import cn from 'classnames'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SuccessPage from './SuccessPage';



function Home () { // This component will call the list of the quiz
const [disabled,setDisabled] = useState(true)
const [successPage,setSuccessPage] = useState(false)
const { register, handleSubmit,watch } = useForm();
const watchInput = watch('mobile') 

  useEffect(()=>{
      if(watchInput && watchInput.length === 10){
          setDisabled(false)
      }else{
        setDisabled(true)
      }
  },[watchInput])

  useEffect(()=>{
      if(localStorage.getItem('submit') === "true"){
          setSuccessPage(true)
      }
    },[])

  const onSubmit = () => { 
      localStorage.setItem('submit',true);
      setSuccessPage(true)
     }

    return (
        <>
        <div className='home-page'>
            <div className='main-container'>
                    <img className='main-container-image' src='/man_matters.png' alt='man_matters' />
                <div>
                    <h3 className='main-container-text mb-4 pb-2'><span className='gradient-text'> Congratulations</span><span role="img" aria-label="celebration"> 🥳 </span></h3>
                </div>
            </div>
           <div className='gift-container'>
                <Container>
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6} xs={12}>
                            <div className="card">    
                                <div>
                                    <img  width="100px" src="paytm.png" alt="Paytm" />
                                </div>
                                <div>
                                    <h2 className='gradient-text'>Gift card Rs 200</h2>
                                </div>
                            </div>
                             { !successPage ?   <div className=''>
                                <p className='mt-3'>
                                    You have WON Paytm Gift Card of Rs 200 for <b>placing the order on Man Matters</b>
                                </p>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input 
                                        maxLength="10"
                                        name="mobile" 
                                        className='gift-input' 
                                        placeholder='Enter Mobile Number'
                                        onChange = {(e)=>{
                                            e.target.value = e.target.value.replace(/^[A-Za-z!@#$%^&*(),.?":{}|<>';]*$/g,'')
                                        }}
                                        ref={register({ 
                                                maxLength:10,
                                                required:true
                                            })} 
                                        />
                                        {disabled && <small className='mt-2'> Enter same number used on Man Matters </small>}
                                        <input 
                                        disabled={!disabled ? false : true}
                                        className={cn(disabled?'submit-disabled':'submit','mt-4')} 
                                        type="submit" 
                                        value='Wow! Get my Paytm Gift Card' />
                                </form>
                            </div> : <SuccessPage/>
                            }
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                    <br/>
                    <div  className='powered-by mb-3'>
                        <small ><b>Powered by</b> <span><img width="70px" src='gokwik-logo.svg' alt='gokwik-logo' /></span></small>
                    </div>
                </Container>
            </div> 
        </div>
     </>
    )
}

export default Home;

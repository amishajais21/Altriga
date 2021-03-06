import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Form, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {savePaymentMethod} from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'


const PaymentScreen = ({history}) => {

    const cart= useSelector(state=> state.cart)
    const {shippingAddress} = cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')


    const dispatch= useDispatch()

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        // push to next page /placeorder
        history.push('/placeorder') 
    } 

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                   <Form.Label as='legend'>Select Methos</Form.Label>

                   <Col>
                   <Form.Check type='radio' label='PayPal or Credit Card' id='PayPal' 
                   name='paymentMethod' value='PayPal' 
                   checked onChange={(e)=> setPaymentMethod(e.target.value)}>      
                   </Form.Check>

                     {/* add another payment method */}
                   {/* <Form.Check type='radio' label='Stripe' id='Stripe' 
                   name='paymentMethod' value='Stripe' 
                   onChange={(e)=> setPaymentMethod(e.target.value)}>      
                   </Form.Check> */}

                   </Col>

                </Form.Group>

                <Button className='my-3' type='submit' variant='primary'>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen

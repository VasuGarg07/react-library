import React from 'react'
import Stepper from '../components/Stepper'

const StepperDemo = () => {

    const steps = [
        {
            label: "Account",
            content: <div>Account Information</div>
        },
        {
            label: "Address",
            content: <div>Delivery Address</div>
        },
        {
            label: "Payment",
            content: <div>Payment Information</div>
        },
        {
            label: "Confirm",
            content: <div>Confirm Order</div>
        }
    ];

  return (
    <Stepper steps={steps} />
  )
}

export default StepperDemo
"use client"

import FormHeader from '@/components/backoffice/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { makePostRequest } from '@/lib/apiRequest'
import {generateCouponCode} from '@/lib/generateCouponCode'

export default function NewCoupon() {


const [loading,setLoading] = useState(false)
const {register,reset,handleSubmit,formState:{errors}} = useForm()

const [couponName, setCouponName] = useState("");
const [expiryDate, setExpiryDate] = useState("");
const [couponCode, setCouponCode] = useState("");


// Automatically update coupon code when name or date changes
useEffect(() => {
  setCouponCode(generateCouponCode(couponName, expiryDate));
}, [couponName, expiryDate]); // Runs every time couponName or expiryDate changes

async function onSubmit (data) {

   {/* 
        -id => auto
        -name
        -code
        -description
        -expiryDate
        */
      }
      

  console.log(data);
  makePostRequest(setLoading,"/api/coupons",data,"Coupon",reset) 
  setCouponCode("")
  setExpiryDate("")
  setCouponName("")

  
   
}

  return (
    <div>
      <FormHeader title="New Coupon"/>

      <form onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8
      dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'
      >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

        <TextInput
         label="Coupon Name"
         name="name"
         register={register}
         errors={errors}
         onChange={(e) =>  setCouponName(e.target.value)}
         />

      
        <TextInput
         label="Coupon Code"
         name="code"
         defaultValue={couponCode}
         readOnly={true}
         register={register}
         errors={errors}
         className='w-full text-gray-500'
         />

        <TextInput
         label="Coupon Expiry Date"
         name="expiryDate"
         type='date'
         register={register}
         errors={errors}
         onChange={(e) => setExpiryDate(e.target.value)}
        className='w-full'
         /> 
        

        <TextareaInput
         label="Coupon Description"
         name="description"
         register={register}
         errors={errors}
         />

       

     

         <SubmitButton 
         buttonTitle="Create Category"
         isLoading={false}
        loadingButtonTitle="Creating Coupon please wait...."

         />
      </div>

      </form>
 

        

        </div>
     
  
  )
}

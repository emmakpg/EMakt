"use client"

import FormHeader from '@/components/backoffice/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { generateSlug } from '@/lib/generateslug'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { makePostRequest } from '@/lib/apiRequest'

export default function NewCoupon() {

const [loading,setLoading] = useState(false)
const {register,reset,handleSubmit,formState:{errors}} = useForm()


async function onSubmit (data) {

   {/* 
        -id => auto
        -name
        -slug => auto
        -code
        -description
        -expiryDate
        */
      }
      
  const slug = generateSlug(data.name)
  data.slug = slug
  console.log(data);
  makePostRequest(setLoading,"/api/coupons",data,"Coupon",reset) 

  
   
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
         />

      
        <TextInput
         label="Coupon Code"
         name="code"
         register={register}
         errors={errors}
         className='w-full'
         />

        <TextInput
         label="Coupon Expiry Date"
         name="expiryDate"
         type='date'
         register={register}
         errors={errors}
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

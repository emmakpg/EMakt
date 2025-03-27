"use client"

import FormHeader from '@/components/backoffice/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { makePostRequest } from '@/lib/apiRequest'
import {generateMerchantCode} from '@/lib/generateMerchantCode'

export default function NewMerchant() {


const [loading,setLoading] = useState(false)
const {register,reset,handleSubmit,formState:{errors}} = useForm()






async function onSubmit (data) {

   {/* 
        -id => auto
        
        */
      }
      
  const merchantCode = generateMerchantCode(data.name)
  data.merchantCode = merchantCode
  console.log(data);
  makePostRequest(setLoading,"/api/merchants",data,"Merchant",reset) 


  
   
}

  return (
    <div>
      <FormHeader title="Add Merchant"/>

      <form onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8
      dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'
      >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

        <TextInput
         label="Merchant Name"
         name="name"
         register={register}
         errors={errors}
         className='w-full'
         />

        <TextInput
         label="Merchant Phone"
         name="phone"
         type='tel'
         register={register}
         errors={errors}
         className='w-full'
         />

        <TextInput
         label="Merchant Contact Person"
         name="contactPerson"
         register={register}
         errors={errors}
         className='w-full'
         />
        
        <TextInput
         label="Merchant Email"
         name="email"
         type='email'
         register={register}
         errors={errors}
         className='w-full'
         />

        <TextInput
         label="Merchant Address"
         name="address"
         register={register}
         errors={errors}
         className='w-full'
         />     

      
        <TextareaInput
         label="Merchant Payment Terms"
         name="paymentTerms"
         readOnly={true}
         register={register}
         errors={errors}
         isRequired={false}
         />

  <TextareaInput
         label="Notes"
         name="notes"
         readOnly={true}
         register={register}
         errors={errors}
         isRequired={false}
         />
        

     

         <SubmitButton 
         buttonTitle="Add Merchant"
         isLoading={false}
        loadingButtonTitle="Adding Merchant please wait...."

         />
      </div>

      </form>
 

        

        </div>
     
  
  )
}

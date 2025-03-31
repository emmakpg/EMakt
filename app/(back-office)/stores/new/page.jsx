"use client"

import FormHeader from '@/components/backoffice/FormHeader'
import ImageInput from '@/components/FormInputs/ImageInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { generateSlug } from '@/lib/generateslug'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { makePostRequest } from '@/lib/apiRequest'

export default function NewStore() {

const [loading,setLoading] = useState(false)
const {register,reset,handleSubmit,formState:{errors}} = useForm()
const [logoUrl,setLogoUrl] = useState("")

async function onSubmit (data) {

   {/* 
        -id => auto
        -name
        -slug => auto
        -description
        -logo*/
      }
      
  const slug = generateSlug(data.name)
  data.slug = slug
  data.logoUrl = logoUrl
  console.log(data);
  makePostRequest(setLoading,"/api/stores",data,"Store",reset) 
  setLogoUrl("")
  
   
}

  return (
    <div>
      <FormHeader title="New Store"/>

      <form onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8
      dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'
      >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

        <TextInput
         label="Store Name"
         name="name"
         register={register}
         errors={errors}
         />

        <TextareaInput
         label="Store Description"
         name="description"
         register={register}
         errors={errors}
         />

        <ImageInput
        label="Store Logo"
        imageUrl={logoUrl}
        setImageUrl={setLogoUrl}
        endpoint='storeLogoUploader'
        />

         <SubmitButton 
         buttonTitle="Add Store"
         isLoading={false}
          loadingButtonTitle="Adding Store please wait...."

         />
      </div>

      </form>
 

        

        </div>
     
  
  )
}

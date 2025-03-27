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

export default function NewBanner() {

const [loading,setLoading] = useState(false)
const {register,reset,handleSubmit,formState:{errors}} = useForm()
const [imageUrl,setImageUrl] = useState("")

async function onSubmit (data) {

   {/* 
        -id => auto
        -title
        -link
        -image*/
      }
      
 
  data.imageUrl = imageUrl
  console.log(data);
  makePostRequest(setLoading,"/api/banners",data,"Banner",reset) 
  setImageUrl("")
  
   
}

  return (
    <div>
      <FormHeader title="New Banner"/>

      <form onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8
      dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'
      >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

        <TextInput
         label="Banner Title"
         name="title"
         register={register}
         errors={errors}
         className='w-full'
         />

        <TextInput
         label="Banner Link"
         name="link"
         register={register}
         errors={errors}
         className='w-full'
         />

        <ImageInput
        label="Banner Image"
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        endpoint='bannerImageUploader'
        />

         <SubmitButton 
         buttonTitle="Create Banner"
         isLoading={false}
          loadingButtonTitle="Creating Banner please wait...."

         />
      </div>

      </form>
 

        

        </div>
     
  
  )
}

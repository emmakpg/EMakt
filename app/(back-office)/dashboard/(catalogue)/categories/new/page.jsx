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

export default function NewCategory() {

const [loading,setLoading] = useState(false)
const {register,reset,handleSubmit,formState:{errors}} = useForm()
const [imageUrl,setImageUrl] = useState("")

async function onSubmit (data) {

   {/* 
        -id => auto
        -title
        -slug => auto
        -description
        -image*/
      }
      
  const slug = generateSlug(data.title)
  data.slug = slug
  data.imageUrl = imageUrl
  console.log(data);
  makePostRequest(setLoading,"/api/categories",data,"Category",reset) 
  setImageUrl("")
  
   
}

  return (
    <div>
      <FormHeader title="New Category"/>

      <form onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8
      dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'
      >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

        <TextInput
         label="Category Title"
         name="title"
         register={register}
         errors={errors}
         />

        <TextareaInput
         label="Category Description"
         name="description"
         register={register}
         errors={errors}
         />

        <ImageInput
        label="Category Image"
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        endpoint='categoryImageUploader'
        />

         <SubmitButton 
         buttonTitle="Create Category"
         isLoading={false}
          loadingButtonTitle="Creating Category please wait...."

         />
      </div>

      </form>
 

        

        </div>
     
  
  )
}

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
import SelectInput from '@/components/FormInputs/SelectInput'

import ArrayItemsInput from '@/components/FormInputs/ArrayItemsInput'

export default function NewProduct() {

const [loading,setLoading] = useState(false)
const {register,reset,handleSubmit,formState:{errors}} = useForm()
const [imageUrl,setImageUrl] = useState("")

const [tags,setTags] = useState([])





const stores = [
  {
    id:1,
    title:"Phones"
  },
  {
    id:2,
    title:"Chargers"
  },
  {
    id:3,
    title:"Laptops"
  },
]

async function onSubmit (data) {

   {/* 
        */
      }
      
  const slug = generateSlug(data.title)
  data.slug = slug
  data.imageUrl = imageUrl
  data.tags = filteredTags
  console.log(data);
  makePostRequest(setLoading,"/api/products",data,"Product",reset) 
  setImageUrl("")
  
   
}

  return (
    <div>
      <FormHeader title="New Products"/>

      <form onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8
      dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'
      >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

        <TextInput
         label="Product Title"
         name="title"
         register={register}
         errors={errors}
         className='w-full'
         />

        <TextInput
         label="Product SKU"
         name="sku"
         register={register}
         errors={errors}
         className='w-full'
         />

        <TextInput
         label="Product Barcode"
         name="barcode"
         register={register}
         errors={errors}
         className='w-full'
         />     

        <TextInput
         label="Product Price (Before Discount)"
         name="price"
         register={register}
         errors={errors}
         className='w-full'
         />

        <TextInput
         label="Product Sale Price (Discounted)"
         name="salePrice"
         register={register}
         errors={errors}
         className='w-full'
         />

        <SelectInput
         label="Select Category"
         name="categoryId"
         register={register}
         errors={errors}
         options={stores}
         multiple={false}
         className='w-full'
         />

        <TextareaInput
         label="Product Description"
         name="description"
         register={register}
         errors={errors}
         />

         {/* Tags */}
       
         <ArrayItemsInput items={tags} setItems={setTags} itemTitle="Tags" />

        <ImageInput
        label="Product Image"
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        endpoint='productImageUploader'
        />

         <SubmitButton 
         buttonTitle="Add Product"
         isLoading={false}
          loadingButtonTitle="Adding Product please wait...."

         />
      </div>

      </form>
 

        

        </div>
     
  
  )
}

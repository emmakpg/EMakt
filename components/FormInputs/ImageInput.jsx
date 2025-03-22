
import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

export default function ImageInput({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full",
  endpoint = "",
}) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2  dark:bg-slate-900 rounded-md shadow dark:text-slate-50 
            text-slate-900 border border-slate-950 hover:bg-slate-100 py-2 px-4 cursor-pointer dark:hover:bg-slate-950"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-contain"
        />
      ) : (
        <UploadDropzone
        className="dark:bg-slate-700 py-8 bg-slate-200 text-slate-950 "
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
            //console.log(res[0]);
            
          setImageUrl(res[0].ufsUrl);
          // Do something with the response
          toast.success("Image Upload complete");
          console.log("Files: ", res);
          console.log("Upload Completed");
        }}
        onUploadError={(error) => {
          toast.error("Image Upload Failed, Try Again");
          // Do something with the error.
          console.log(`ERROR! ${error.message}`, error);
        }}
      />
      )}
    </div>
  );
}
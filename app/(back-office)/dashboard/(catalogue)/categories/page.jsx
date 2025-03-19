import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";


import Link from "next/link";

export const Categories = () => {
  return (
    <div className="dark:text-slate-50">
          {/* Header */}
      <PageHeader 
      linkTitle="Add Category"
      heading="Category"
      href="/dashboard/categories/new"
      />

      {/*Table Actions  */}
      <TableActions/>
      
      <div className="py-8"> 

      </div>
       
    </div>
  )
}

export default Categories; 
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";




export const Products = () => {
  return (
    <div className="dark:text-slate-50">
          {/* Header */}
      <PageHeader 
      linkTitle="Add Products"
      heading="Products"
      href="/dashboard/products/new"
      />

      {/*Table Actions  */}
      <TableActions/>
      
      <div className="py-8"> 

      </div>
       
    </div>
  )
}

export default Products; 
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";




export const Stores = () => {
  return (
    <div className="dark:text-slate-50">
          {/* Header */}
      <PageHeader 
      linkTitle="Add Store"
      heading="Stores"
      href="/stores/new"
      />

      {/*Table Actions  */}
      <TableActions/>
      
      <div className="py-8"> 

      </div>
       
    </div>
  )
}

export default Stores; 
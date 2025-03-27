import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";




export const Merchants = () => {
  return (
    <div className="dark:text-slate-50">
          {/* Header */}
      <PageHeader 
      linkTitle="Add Merchant"
      heading="Coupons"
      href="/merchants/new"
      />

      {/*Table Actions  */}
      <TableActions/>
      
      <div className="py-8"> 

      </div>
       
    </div>
  )
}

export default Merchants; 
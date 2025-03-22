import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";




export const Coupons = () => {
  return (
    <div className="dark:text-slate-50">
          {/* Header */}
      <PageHeader 
      linkTitle="Add Coupon"
      heading="Coupons"
      href="/dashboard/coupons/new"
      />

      {/*Table Actions  */}
      <TableActions/>
      
      <div className="py-8"> 

      </div>
       
    </div>
  )
}

export default Coupons; 
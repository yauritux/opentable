import Link from 'next/link'

export default function RestaurantCard() {
  return (
    <Link href="/restaurant/milestones-grill">
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHm18IGPgsY84_ob-qzQ7Z3OcCZOmtBoUKA&usqp=CAU" 
          alt="" className="w-full h-36"/>
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2 text-black text-center">Waffle with Honey</h3>
          <div className="flex items-start">
            <div className="flex mb-2 text-reg text-orange-700 font-bold">*****</div>
            <p className="ml-2 text-blue-600">77 reviews</p>
          </div>
          <div className="flex text-reg text-[#000000] capitalize">
            <p className="mr-3">Mexican</p>
            <p className="mr3">$$$$</p>
            <p className="ml-3">Toronto</p>
          </div>
          <p className="text-sm mt-1 font-bold text-[#000000]">Booked 3 times today</p>
        </div>              
      </div>       
    </Link>     
  )
}

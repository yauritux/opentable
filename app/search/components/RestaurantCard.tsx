import Link from 'next/link'
import { Restaurant } from "@prisma/client"

export default function RestaurantCard({props} : Restaurant) {
  return (
    <div className="border-b flex pb-5">      
        <img src={props?.main_image} alt="" className="w-44 rounded" />
        <div className="pl-5">
          <h2 className="text-3xl">{props?.name}</h2>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2 text-sm">Awesome</p>
          </div>
          <div className="mb-9">
            <div className="font-light flex text-reg">
              <p className="mr-4">$$$</p>
              <p className="mr-4">{props?.cuisine?.name}</p>
              <p className="mr-4">{props?.location?.name}</p>
            </div>
          </div>
          <div className="text-red-600">
            <Link href={`/restaurant/${props?.slug}`}>View more information</Link>
          </div>
        </div>
    </div>
  )
}

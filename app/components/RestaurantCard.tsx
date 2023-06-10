import Link from 'next/link'
import { RestaurantCardType } from '../page'
import Price from './Price';
import Stars from './Stars';

interface RestaurantProps {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: RestaurantProps) {
  return (
    <Link href={`/restaurant/${restaurant.slug}`}>
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
        <img src={restaurant.main_image} alt="" className="w-full h-36"/>
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2 text-black text-center">{restaurant.name}</h3>
          <div className="flex items-start">
            <Stars reviews={restaurant.reviews} />
            {/* <div className="flex mb-2 text-reg text-orange-700 font-bold">*****</div> */}
            <p className="ml-2 text-blue-600">{restaurant.reviews.length} review{restaurant.reviews.length > 1 ? "s" : ""}</p>
          </div>
          <div className="flex text-reg text-[#000000] capitalize">
            <p className="mr-3">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p className="ml-3">{restaurant.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold text-[#000000]">Booked 3 times today</p>
        </div>              
      </div>       
    </Link>     
  )
}

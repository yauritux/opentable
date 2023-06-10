import Link from "next/link"
import { Location, Cuisine, PRICE } from "@prisma/client"

export default async function SearchSideBar({locations, cuisines, searchParams}: {
  locations: Location[]; cuisines: Cuisine[]; 
  searchParams: { city?: string; cuisine?: string; price?: PRICE }
}) {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((location: Location) => (
          <Link key={location.id} className="font-light text-reg capitalize" 
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: location.name,
              }
            }}>{location.name}</Link>
        ))}        
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine: Cuisine) => (
          <Link key={cuisine.id} className="font-light text-reg capitalize" 
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              }
            }}>{cuisine.name}</Link>
        ))}
      </div>
      <div className="mt3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <Link href={{
            pathname: "/search",
            query: {
              ...searchParams,
              price: PRICE.CHEAP,
            }
          }} className="border w-full text-reg font-light rounded-l p-2">$</Link>
          <Link href={{
            pathname: "/search",
            query: {
              ...searchParams,
              price: PRICE.REGULAR,
            }
          }} className="border-r border-t border-b w-full text-reg font-light p-2">$$</Link>
          <Link href={{
            pathname: "/search",
            query: {
              ...searchParams,
              price: PRICE.EXPENSIVE,
            }
          }}className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">$$$</Link>
        </div>
      </div>
    </div>
  )
}

import { prisma } from "@/pages/api/db"
import { Location, Cuisine } from "@prisma/client"

const fetchLocations = (): Promise<Location> => {
  return prisma.location.findMany({})
}

const fetchCuisines = (): Promise<Cuisine> => {
  return prisma.cuisine.findMany({})
}

export default async function SearchSideBar() {
  const locations = await fetchLocations()
  const cuisines = await fetchCuisines()

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location: Location) => (
          <p key={location.id} className="font-light text-reg capitalize">{location.name}</p>
        ))}        
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine: Cuisine) => (
          <p key={cuisine.id} className="font-light text-reg capitalize">{cuisine.name}</p>
        ))}
      </div>
      <div className="mt3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">$</button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">$$</button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">$$$</button>
        </div>
      </div>
    </div>
  )
}

import Header from "./components/Header"
import SearchSideBar from "./components/SearchSideBar"
import RestaurantCard from "./components/RestaurantCard"
import { prisma } from "@/pages/api/db"
import { PRICE, Cuisine, Location } from "@prisma/client"

export interface Restaurant {
  id: number;
  slug: string;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: {
    id: number;
    name: string;
  },
  location: {
    id: number;
    name: string;
  }
}

const fetchRestaurantByLocation = (location: string | undefined): Promise<Restaurant[]> => {
  const select = {
    id: true,
    slug: true,
    name: true,
    price: true,
    cuisine: true,
    location: true,
    main_image: true,
  }

  if (!location) return prisma.restaurant.findMany({select})

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: location.toLowerCase()
        }
      }
    },
    select
  })
}

const fetchLocations = (): Promise<Location> => {
  return prisma.location.findMany({})
}

const fetchCuisines = (): Promise<Cuisine> => {
  return prisma.cuisine.findMany({})
}

export default async function Search({searchParams}: {searchParams: { 
  city?: string, cuisine?: string, price?: PRICE 
}}) {

  const locations = await fetchLocations()
  const cuisines = await fetchCuisines()

  const restaurants = await fetchRestaurantByLocation(searchParams?.city)

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar locations={locations} cuisines={cuisines} searchParams={searchParams} />
        <div className="w-5/6">
          {
            restaurants.length > 1 ? 
              restaurants.map((restaurant: Restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))  :
              <p className="text-red-500">Sorry, no restaurant can be found at {searchParams.city} area</p>
          }
        </div>
      </div>
    </>        
  )
}
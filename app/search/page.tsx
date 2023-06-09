import Header from "./components/Header"
import SearchSideBar from "./components/SearchSideBar"
import RestaurantCard from "./components/RestaurantCard"
import { prisma } from "@/pages/api/db"
import { Restaurant } from "@prisma/client"

const fetchRestaurantByLocation = (location: string | undefined): Promise<Restaurant> => {
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

export default async function Search({searchParams}: {searchParams: { city: string}}) {

  const restaurants = await fetchRestaurantByLocation(searchParams?.city)

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar/>
        <div className="w-5/6">
          {
            restaurants.length > 1 ? 
              restaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} props={restaurant} />
              ))  :
              <p className="text-red-500">Sorry, there's no restaurant can be found for {searchParams.city} area</p>
          }
        </div>
      </div>
    </>        
  )
}
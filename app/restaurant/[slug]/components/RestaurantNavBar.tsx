import Link from 'next/link'

export default function RestaurantNavBar({slug}: {slug: string}) {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={`/restaurant/${slug}`} className="mr-7 text-[#000099]">Overview</Link>
      <Link href={`/restaurant/${slug}/menu`} className="mr-7 text-[#000099]">Menu</Link>
    </nav>
  )
}

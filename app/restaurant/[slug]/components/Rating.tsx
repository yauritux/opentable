import { calculateReviewRating } from "@/utils/calculateReviewRating"
import { Review } from "@prisma/client"
import Stars from "@/app/components/Stars"

export default function Rating({reviews} : {reviews: Review[]}) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3 text-[#000099] font-bold">{calculateReviewRating(reviews).toFixed(1)}</p>
        <p className="text-reg ml-4 text-[#000099] font-bold">{reviews.length} Review{reviews.length > 1 ? "s" : ""}</p>
      </div>
    </div>
  )
}

import { Review } from "types/Teacher";

interface TeacherReviewsProps {
  reviews: Review[];
  setIsExpanded: (expanded: boolean) => void;
}

const TeacherReviews: React.FC<TeacherReviewsProps> = ({
  reviews,
  setIsExpanded,
}) => (
  <div>
    <ul className="flex flex-col gap-8 mb-4">
      {reviews.map((review, index) => (
        <li key={index} className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="w-11 h-11 flex items-center justify-center bg-grey rounded-full text-white text-2xl font-medium">
              {review.reviewer_name.charAt(0)}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-base font-medium text-grey">
                {review.reviewer_name}
              </span>
              <div className="flex gap-2 items-center">
                <svg className="w-4 h-4">
                  <use href={`/sprite.svg#icon-star-yellow`} />
                </svg>
                <p className="text-sm font-medium">
                  {review.reviewer_rating}.0
                </p>
              </div>
            </div>
          </div>
          <p className="text-base font-medium">{review.comment}</p>
        </li>
      ))}
    </ul>
    <button
      className="underline cursor-pointer"
      onClick={() => setIsExpanded(false)}
    >
      Show less
    </button>
  </div>
);

export default TeacherReviews;

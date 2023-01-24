import { getTimeAgo, trimUrl } from "@/utils/helper";
import Image from "next/image";
import CategoryBadge from "./CategoryBadge";
import Link from "next/link";

export default function StoryCard({
   story,
   withImage = false,
   withExcerpt = true,
   imageSize = "md",
   partnerLogo,
   whiteText = false,
   contentStyles = {},
}) {
   const authors = story?.authors;
   const timeToRead = story?.time_to_read;
   /*
    Image size
    full: 177px height, 270px width
    md: 130px height, 213px width
    sm: 90px height, 147px width
  */
   const heightSizes = {
      full: 177,
      md: 130,
      sm: 90,
   };
   const widthSizes = {
      full: 270,
      md: 213,
      sm: 147,
   };

   return (
      <div className="content flex flex-col justify-between h-fit items-stretch w-full">
         {/* Image */}
         {withImage ? (
            <Link href={trimUrl(story?.post_url)}>
               <div className="mb-[15px]">
                  <Image
                     src={story?.image_url}
                     alt={story?.post_title}
                     height={heightSizes[imageSize]}
                     width={widthSizes[imageSize]}
                     className="rounded-md h-[90px]"
                  />
               </div>
            </Link>
         ) : null}
         <div style={contentStyles}>
            <CategoryBadge logo={partnerLogo} category={story?.category} />
            <Link href={trimUrl(story?.post_url)}>
               <h2
                  className={`${
                     whiteText ? "text-white" : "text-heading"
                  } font-bold text-2xl my-[5px] w-full`}
               >
                  {story?.post_title}
               </h2>
               {withExcerpt ? (
                  <p
                     className={`${
                        whiteText ? "text-white" : "text-content"
                     } font-serif text-lg text-content`}
                  >
                     {story?.post_excerpt}
                  </p>
               ) : null}
            </Link>
         </div>
         {/* Bottom info Author, time ago and minutes read */}
         <div
            className={`${
               whiteText ? "text-white" : "text-smalltext"
            } text-sm mt-[5px]`}
         >
            <p>
               <Link href={authors[0]?.data?.url}>
                  <span className="text-capitalize hover:text-black">
                     {authors[0]?.data?.display_name}
                  </span>
               </Link>{" "}
               | <span>{getTimeAgo(story?.post_date)}</span> |{" "}
               <span>
                  {timeToRead} {timeToRead == 1 ? "min" : "mins"} read
               </span>
            </p>
         </div>
      </div>
   );
}

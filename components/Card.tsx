import Image from "next/image";
import Link from "next/link";
import { cardProps } from "../typings";

const Card = ({
  linkToPost,
  description,
  mainImage,
  postTitle,
  authorName,
  authorImage,
}: cardProps) => {
  return (
    <div className="group border rounded-lg overflow-hidden">
      <Link href={linkToPost}>
        <a>
          <Image
            className="h-60 w-full object-cover group-hover:scale-110 transition-all"
            src={mainImage}
            alt={postTitle}
            width={250}
            height={250}
          />
          <div className="flex p-5 min-h-56 justify-between ">
            <div>
              <h3 className="font-bold">{postTitle}</h3>
              <p className="text-sm">
                {description} by {authorName}
              </p>
            </div>
            <img
              className="rounded-full w-12 h-12"
              src={authorImage}
              alt={authorName}
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;

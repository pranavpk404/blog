import Image from "next/image";
import Link from "next/link";
import { CardProps } from "../typings";

const Card = ({
  linkToPost,
  description,
  mainImage,
  postTitle,
  authorName,
  authorImage,
}: CardProps) => {
  return (
    <div className="hover:scale-105 transition-all border rounded-lg overflow-hidden">
      <Link href={linkToPost}>
        <a>
          <img
            className=" mx-auto object-cover w-full"
            src={mainImage}
            alt={postTitle}
            width={250}
            height={250}
          />
          <div className="flex p-5  justify-between ">
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

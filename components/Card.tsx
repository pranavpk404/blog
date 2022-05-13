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
          <Image
            className="mx-auto object-cover w-full"
            src={mainImage}
            alt={postTitle}
            width={418}
            height={140}
          />
          <div className="flex p-5 justify-between">
            <div>
              <h3 className="font-bold">{postTitle}</h3>
              <p className="text-sm">
                {description} by {authorName}
              </p>
            </div>
            <span className="h-14 w-14 rounded-full">
              <Image
                width={56}
                height={56}
                className="rounded-full"
                src={authorImage}
                alt={authorName}
              />
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;

import Image from "next/image";
import Link from "next/link";
import { CardProps } from "../typings";

const Card = ({
  linkToPost,
  description,
  thumbnail,
  postTitle,
  authorName,
  authorImage,
}: CardProps) => {
  return (
    <div className="hover:scale-105 mx-auto md:mx-5 md:my-5 max-w-xs shadow-2xl transition-all border rounded-lg overflow-hidden">
      <Link href={linkToPost}>
        <a>
          <Image
            className="mx-auto object-cover w-full"
            src={thumbnail}
            alt={postTitle}
            width={350}
            height={150}
          />
          <div className="flex p-5 justify-between">
            <div>
              <h3 className="font-bold">{postTitle}</h3>
              <span>
                <p className="text-sm">{description}</p>
                <p className="font-bold">by {authorName}</p>
              </span>
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

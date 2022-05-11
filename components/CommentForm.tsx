import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "../typings";
import { useState } from "react";
const CommentForm = ({ id }: any) => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    fetch("/api/createcomments", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        setSubmitted(false);
      });
  };

  return (
    <>
      {submitted ? (
        <div className="flex flex-col p-10 m-10 bg-yellow-500 text-white max-w-2xl mx-auto">
          <h3 className="text-2xl">Thank you for your comment!</h3>
          <p className="text-sm font-bold ">
            Once it is approved ,it will be shown below
          </p>
        </div>
      ) : (
        <section className="text-gray-600 body-font relative">
          <input {...register("_id")} type="hidden" name="_id" value={id} />
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
                Leave a comment
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:w-1/2 md:w-2/3 mx-auto"
            >
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out${
                        errors.name && "focus:ring-red-600  border-red-600"
                      }`}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        errors.email && "focus:ring-red-600 border-red-600"
                      }`}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Comment
                    </label>
                    <textarea
                      {...register("comment")}
                      id="comment"
                      name="comment"
                      typeof="text"
                      className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${
                        errors.comment && "focus:ring-red-600  border-red-600"
                      }`}
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <input
                    type="submit"
                    value="Add Comment"
                    className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg "
                  />
                </div>
              </div>
              <div className="error text-red-600 font-bold ">
                {errors.name && <div>*Name is required</div>}
                {errors.email && <div>*Email is required</div>}
                {errors.comment && <div>*Comment is required</div>}
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default CommentForm;

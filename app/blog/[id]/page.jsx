import Link from "next/link";
import Image from "next/image";

async function fetchBlog(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/blogs/${id}?populate=*`,
      options
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

const page = async ({ params }) => {
  const blog = await fetchBlog(params.id);

  const imageURL =
    "http://127.0.0.1:1337" +
    blog?.data?.attributes?.img?.data?.attributes?.url;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href={"/"}>{"<Back"}</Link>
      <div className="w-full relative h-96 overflow-hidden rounded-lg mt-5">
        <Image layout="fill" objectFit="cover" src={imageURL} alt="imageURL" />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">
          {blog?.data?.attributes?.Title}
        </h1>
        <p className="text-gray-600 mt-2">
          {blog?.data?.attributes?.Description[0]?.children[0]?.text}
        </p>
        <div className="mt-4 flex items-center text-gray-400">
          <span className="text-sm">
            Published on {blog?.data?.attributes?.publishedAt.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;

import Blogs from "@/components/Blogs";
import Catagorories from "@/components/Catagories";

async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch("http://127.0.0.1:1337/api/categories", options);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/blogs?populate=*",
      options
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

const Home = async () => {
  const catagories = await fetchCategories();
  const blogs = await fetchBlogs();

  return (
    <div>
      <Catagorories catagories={catagories} />
      <Blogs blogs={blogs} />
    </div>
  );
};

export default Home;

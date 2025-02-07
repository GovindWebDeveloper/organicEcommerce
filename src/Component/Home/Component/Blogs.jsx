import Images from "../../ImageComponent/Images";
import { Card } from "antd";

const blogImage = [
  {
    id: 1,
    heading: "Top 10 casual look ideas to dress up your kids",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupt ireiciendis similique quia hic laborum dignissimos",
    img: Images.BlogImage1,
  },
  {
    id: 2,
    heading: "Latest trends of wearing street wears supremely",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupt ireiciendis similique quia hic laborum dignissimos",
    img: Images.BlogImage2,
  },
  {
    id: 3,
    heading: "10 Different Types of comfortable clothes ideas for women",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupt ireiciendis similique quia hic laborum dignissimos",
    img: Images.BlogImage3,
  },
];

const Blogs = () => {
  return (
    <div>
      <div>
        <h1>Our Recent Blog</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "20px",
            margin: "auto",
          }}
        >
          {blogImage.map((blog) => (
            <Card
              key={blog.id}
              style={{
                width: "450px",
                height: "500px",
                padding: "20px",
              }}
            >
              <img src={blog.img} alt="Blog Image" style={{ width: "400px" }} />
              <h1>{blog.heading}</h1>
              <p>{blog.para}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

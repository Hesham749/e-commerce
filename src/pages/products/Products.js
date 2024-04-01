
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import { Button,ButtonGroup } from "flowbite-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader/loader";
import { useEffect } from "react";

export default function AllProducts() {
  const {cat}= useParams()
  const allProducts = useSelector((state) => state.products);
  const products = allProducts.filter(product =>
    cat ? product.category ===cat : product
  )

  const categories = ["electronics","jewelery","men's clothing","women's clothing"]
  const navigate = useNavigate()
  useEffect(() => {
    if ((!categories.find(item => item ===cat

    ))&&(cat!== undefined)) {
      navigate('*')
    }

  }, []);

  if (products.length < 1) {
    return <Loader />;
  } else
  return (
    <>
    <div className="container md:mt-40 mt-20 ">

      <Button.Group className="  flex justify-center items-center flex-wrap container  md:w-full md:flex-nowrap"  >

      <Link to={'/products'}>
      <Button color="gray" className="text-blue-600">AllProducts</Button></Link>
      {categories.map((cat,index) =>(<Link key={index} to={`/products/${cat}`}><Button  color="gray" className="text-blue-600 rounded-md">{cat}</Button></Link>))}

    </Button.Group>
    </div>
      <div className="container mt-10 mb-20 grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2   gap-5">
        {products.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    </>
  );
}

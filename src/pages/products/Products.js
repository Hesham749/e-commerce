
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
    <div className="container mt-40 ">

      <Button.Group className="md:flex md:justify-center grid grid-cols-2 container sm:w-3/5 md:w-full md:flex-nowrap"  >


      <Button color="gray" className="text-blue-600"><Link to={'/products'}>AllProducts</Link></Button>
      {categories.map((cat,index) =>(<Button key={index} color="gray" className="text-blue-600 rounded-md"><Link to={`/products/${cat}`}>{cat}</Link></Button>))}

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

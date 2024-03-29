import Cta from "../../components/cta/Cta";
import Hero from "../../components/hero/Hero";
import PopularProducts from "../../components/most popular/PopularProducts";
import Testimonials from "../../components/testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularProducts />
    <Testimonials />

      <Cta />
    </div>
  );
}

import { ProductName, ProductWrapper } from "./styles";
import { ProductProps } from "./types";

function Product({ productName = "Unknown", productPrice }: ProductProps) {
  return (
    <ProductWrapper>
      <ProductName>{productName}</ProductName>
      {/* Левая логическая часть === true , тогда то что нам нужно показать справа от && показывается
      Левая логическая часть === false , тогда то что нам нужно показать справа от && не показывается
      {Левая логическая часть && то, что нам нужно показать} */}
      {productPrice !== undefined && <div>{productPrice} $</div>}
    </ProductWrapper>
  );
}

export default Product;

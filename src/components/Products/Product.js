import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const Products = () => {

  const navigate = useNavigate()

  const [Products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [topPriced, setTopPriced] = useState(false)

  // const localKandyyUser = localStorage.getItem("kandy_user")
  // const KandyUserObject = JSON.parse(localKandyUser)

  useEffect(
      () => {
          const fetchData = async () => {
              const response = await fetch('http://localhost:8088/products?_expand=productTypes&_sort=name&_order=asc')
              const productsArray = await response.json()
              setProducts(productsArray)
          }
          fetchData()
          console.log('Initial state of products',Products)
      },
      [Products]
  )




  // useEffect(
  //   () => {
  //     if (KandyUserObject.Staff) {
  //       setFilteredProducts(products)
  //     } else {
  //       const myProducts = Products.filter(products => Products.userId === KandyUserObject.id)
  //       setFilteredProducts(Products)
  //     }
  //   },
  //   [KandyUserObject.staff]
  //   )
  useEffect(
      () => {setFilteredProducts(Products)},
      [Products]
  )

  useEffect(
      () => {
        if (topPriced) {
          const topPricedProductsArray = Products.filter(Product => {return Product.price > 2})
          setFilteredProducts(topPricedProductsArray)
        } else {
          setFilteredProducts(Products)
        }
      },
      [topPriced]
    )

  return <>

    <button onClick={() => navigate("/Product/create")}>Add Product</button>

    <h1>List of Products</h1>

    <button onClick={ () => {setTopPriced(true)}}>Top Priced</button>
    <button onClick={ () => {setTopPriced(false)}}>Show All</button>

    <article className="Products">
        {
            filteredProducts.map(
                (product) => {
                    return <section key={product.id} className="Product">
                        <p>{product.name}: ${product.price.toFixed(2)} ({product.productTypes.type})</p>
                    </section>
                }
            )
        }
    </article>
  </>
}
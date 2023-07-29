import { categories } from "../../data";
import { useNavigate } from "react-router-dom";
import { CategorieContanier, Categories, PageWrapper } from "./home";
export default function HomePage() {
  const navigate = useNavigate()
  return (
    <PageWrapper>
      <CategorieContanier>
        <h2>Categories</h2>
        <Categories>
          {categories.map((category) => (
            <div key={category._id} className="category" onClick={()=>navigate(`/category/${category.category}`)}>
              <img src={category.thumbnail} alt={category.category} />
                {category.category}
            </div>
          ))}
        </Categories>
      </CategorieContanier>
    </PageWrapper>
  );
}

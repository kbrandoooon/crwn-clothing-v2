import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'; 

const Directory = ({categories}) => (
<div className="directory-container">
      {categories.map((categories) => (
        <CategoryItem key={categories.id} category={categories} /> ))}
    </div>
); export default Directory;    
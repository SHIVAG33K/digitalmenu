
interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg p-3 hover:shadow-md transition-shadow w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-48">
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <p className="mt-2 font-medium text-sm sm:text-base uppercase">{title}</p>
    </div>
  );
};

  
  export default CategoryCard;
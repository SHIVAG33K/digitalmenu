"use client";
import React from "react";
import Navbar from "../../../components/navbar";
const categories = [
  { title: "Soups", image: "/soups.png" },
  {
    title: "Salads",
    image:
      "https://imgs.search.brave.com/RcTrnJplslo9955D-QopORkyc2OxdJFXBX3eKgKhI3Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODU2/NDIxMzYvcGhvdG8v/c2FsYWQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUFFY0tn/NFQ0UDV4RHBYZy1m/d0RsNzBpb1JDdFhO/dDBLaWhDRmVmby1O/UE09",
  },
  {
    title: "Starters",
    image:
      "https://imgs.search.brave.com/6vU1B91cmYIkrPMPr17wxreYL25ZE2PgqUHAlFZ0C0M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/MDAwNTM5Ni9waG90/by9jaGlja2VuLXRp/a2thLWtlYmFiLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1D/ZUotQnEtVE45QjlP/N3gzZmVqel9QVlh5/NVlZdjBWTHFRcDZD/NmhOeWpjPQ",
  },
  {
    title: "Beverages",
    image:
      "https://imgs.search.brave.com/a-HSHNgytwmEzGp_80JXYDgk9oEWzbZS3OB86tkQeI4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXNzZXRzLndob2xl/Zm9vZHNtYXJrZXQu/Y29tL1BJRS9icm93/c2VfbmF2X2ltYWdl/cy9pbWctYmV2ZXJh/Z2VzLl9GTXdlYnBf/X1NSNTg4LDQ5MF8u/cG5n",
  },
  {
    title: "Coffees",
    image:
      "https://imgs.search.brave.com/ZNbcgjY0uEkJyFmqXsYsm0_bSbM4UoAXzeMQ1mgojxQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NzE3NzQ2L3Bob3Rv/L2VzcHJlc3NvLWNv/ZmZlZS1jdXAtY29s/b3ItaW1hZ2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUxH/ZVlsTTBoMzFyYlFk/RmdZZHQ4ODM4Nmx3/NzFwVS02SThfeTVY/RE5YdjQ9",
  },
  {
    title: "Burger",
    image:
      "https://imgs.search.brave.com/_TaZc4KEUJYO5cSIbbHXQxaqQKPitNw2CK_rGtr9qYg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgy/NzQ0OTQzL3Bob3Rv/L2J1cmdlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cGky/MElpZVhmOFVOazZT/ZUp5LWNIeHViYVZE/N0w1Um53MmkwUW84/dk55TT0",
  },
];

const Categories: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center p-4">
        <h2 className="w-full text-lg font-semibold mb-4 text-left">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full px-4">
          {categories.map((category) => (
            <a href={`/${category.title}`} key={category.title}>
              <CategoryCard key={category.title} {...category} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

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

export default Categories;

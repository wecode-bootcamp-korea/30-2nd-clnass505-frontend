import { useState, useEffect } from 'react';

export default function ChooseCategory() {
  const [categoryData, setCategoryData] = useState([]);
  const [mainCategory, setMainCatgory] = useState(
    localStorage.getItem('mainCategory')
  );
  const [subCategory, setSubCatgory] = useState(
    localStorage.getItem('subcategory_id')
  );
  const [subCategoryList, setSubCategoryList] = useState([]);

  useEffect(() => {
    fetch('/data/categoryData.json')
      .then(res => res.json())
      .then(res => setCategoryData(res));
  }, []);

  useEffect(() => {
    localStorage.setItem('mainCategory', mainCategory);
    localStorage.setItem('subcategory_id', subCategory);
  }, [mainCategory, subCategory]);

  useEffect(() => {
    for (let i = 0; i < categoryData.length; i++) {
      if (categoryData[i][mainCategory]) {
        setSubCategoryList(categoryData[i][mainCategory]);
      }
    }
  }, [mainCategory, categoryData]);

  const handleMainCategory = event => {
    setMainCatgory(event.target.value);
  };

  const handleSubCategory = event => {
    setSubCatgory(event.target.value);
  };

  const activeSubCategory = mainCategory;

  return (
    categoryData.length > 0 && (
      <>
        <select onChange={handleMainCategory}>
          <option hidden="hidden">1차 카테고리를 선택해주세요.</option>
          {categoryData.map((data, index) => {
            let category;
            for (const key in data) {
              category = key;
            }
            return (
              <option
                key={index}
                value={category}
                defaultValue={category === mainCategory ? true : false}
              >
                {category}
              </option>
            );
          })}
        </select>
        {activeSubCategory !== 'null' && activeSubCategory && (
          <select onChange={handleSubCategory}>
            <option hidden="hidden">2차 카테고리를 선택해주세요.</option>
            {subCategoryList.map((data, index) => {
              return (
                <option
                  key={index}
                  defaultValue={data === subCategory ? true : false}
                >
                  {data}
                </option>
              );
            })}
          </select>
        )}
      </>
    )
  );
}

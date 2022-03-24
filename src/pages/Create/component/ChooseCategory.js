import { useState, useEffect } from 'react';

export default function ChooseCategory({ createData, setCreateData }) {
  const [categoryData, setCategoryData] = useState([]);
  const [mainCategory, setMainCatgory] = useState([]);
  const [subCategory, setSubCatgory] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);

  useEffect(() => {
    fetch('/data/category.json')
      .then(res => res.json())
      .then(res => setCategoryData(res[0].클나쓰SOS));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('mainCategory', mainCategory);
  //   localStorage.setItem('subcategory', subCategory);
  // }, [mainCategory, subCategory]);

  // useEffect(() => {
  //   for (let i = 0; i < categoryData.length; i++) {
  //     if (categoryData[i][mainCategory]) {
  //       setSubCategoryList(categoryData[i][mainCategory]);
  //     }
  //   }
  // }, [mainCategory, categoryData]);

  const handleMainCategory = event => {
    setMainCatgory(event.target.value);
    setSubCategoryList(categoryData[event.target.value]);
    localStorage.setItem('mainCategory', event.target.value);
    setCreateData(prev => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const handleSubCategory = event => {
    setSubCatgory(event.target.value);
    localStorage.setItem('subcategory', event.target.value);
    setCreateData(prev => ({ ...prev, [event.target.id]: event.target.value }));
  };

  return (
    Object.keys(categoryData).length > 0 && (
      <>
        <select id="category" onChange={handleMainCategory}>
          <option hidden="hidden">1차 카테고리를 선택해주세요.</option>
          {Object.keys(categoryData).map((data, index) => {
            return (
              <option
                key={index}
                value={data}
                defaultValue={data === mainCategory ? true : false}
              >
                {data}
              </option>
            );
          })}
        </select>
        {subCategoryList.length > 0 && (
          <select id="subcategory" onChange={handleSubCategory}>
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

const { deleteProductCategory } = require("../utils/deleteProductCategory");
const {
  getProductCategoriesByPage,
} = require("../utils/getProductCategoriesByPage");

const handleDeleteCategories = async () => {
  let index = 1;
  const checkArr = [9584, 9585, 113, 37, 31, 29, 2106, 74, 32, 36];
  const arr = [];
  for (let i = 1; i < 260; i++) {
    arr.push(i);
  }
  try {
    for (page of arr) {
      const categories = await getProductCategoriesByPage(page);
      for (const category of categories) {
        if (!checkArr.includes(category.id)) {
          const result = await deleteProductCategory(category.id);
          if (result) {
            index++;
            if (index === 20) {
              index = 0;
            }
            if (index === 20 && page === 258) {
              return;
            }
          } else {
            throw new Error(`delete failed: ${category.id}`);
          }
        }
      }
    }
  } catch (error) {
    return `Error: ${error}`;
  }
};

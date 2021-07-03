function categoriesQuantity() {
  const getCategories = document.querySelectorAll('li.item');
  return console.log(`В списке ${getCategories.length} категории.`);
}

categoriesQuantity();

function allCategories() {
  const getCategories = document.querySelectorAll('li.item');
  getCategories.forEach(category => {
    console.log(`Категория: ${category.querySelector('h2').textContent}
            Количество элементов: ${category.querySelectorAll('li').length}`);
  });
}

allCategories();

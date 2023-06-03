//  "use strict";

// const totalCategories = document.querySelectorAll(".item");

// console.log(`В списке ${totalCategories.length} категории.`);

// const categoriesArray = [...totalCategories]
//   .map(
//     categories => `Категория: ${categories.children[0].textContent}
// Количество элементов: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);____________________________________________

// const numberOfcategories = document.querySelector('#categories');
// console.log('Number of categories:', numberOfcategories.children.length);

// [...numberOfcategories.children].forEach(item => {
//     console.log('Category:', item.firstElementChild.textContent);
//     console.log('Elements:', item.lastElementChild.children.length);
// })
// ____________________________________________________________________________
// const ttt = document.querySelector('.item');
// console.log(ttt.style.color = "red");
// const ttt = document.querySelectorAll('.item');
// console.log(ttt);
// const containerEl = document.querySelector('#categories');
// // console.log(containerEl);
// // console.log(containerEl.lastElementChild);
// console.log(containerEl.firstElementChild.nextElementSibling);

const ListItemEl = document.createElement("li");
console.log(ListItemEl);
ListItemEl.classList.add('galary-item');
const anchorLinkEl = document.createElement("a");
anchorLinkEl.href = "#";
console.log(anchorLinkEl);
ListItemEl.append(anchorLinkEl);
console.log(ListItemEl);
const imgEl = document.createElement("img");

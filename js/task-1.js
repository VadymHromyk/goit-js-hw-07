const count = document.querySelectorAll("ul#categories > li.item");

console.log(`Number of categories: ${count.length}`);

count.forEach((item) => {
  console.log(`Category: ${item.children[0].innerText}`);
  console.log(`Elements: ${item.children[1].querySelectorAll("li").length}`);
});

function getProductIdFromUrl() {
    // Get the current URL
    var url = window.location.href;

    // Create a URL object with the current URL
    var urlObj = new URL(url);

    // Get the search params from the URL
    var searchParams = urlObj.searchParams;

    // Retrieve the product ID parameter value by its name
    var productId = searchParams.get('productId');

    // Return the product ID
    return productId;
}
const productId=getProductIdFromUrl();
console.log(productId);
fetch('https://fakestoreapi.com/products/'+productId)
  .then(function(response) {
    return response.json();
  })
  .then(function(product) {
var productContainer = document.getElementById('product_container');

var productDetailsDiv = document.createElement('div');
productDetailsDiv.classList.add('product_details');

var productImg = document.createElement('img');
productImg.src = product.image;
productImg.alt = 'product_img';

var productDetailsContentDiv = document.createElement('div');
productDetailsContentDiv.classList.add('product_details_content');

var namePriceDiv = document.createElement('div');
namePriceDiv.classList.add('name_price');

var nameParagraph = document.createElement('p');
nameParagraph.classList.add('name');
var firstThreeWords = product.title.split(' ').slice(0, 3).join(' ');
nameParagraph.innerHTML = firstThreeWords;

var ratingImg = document.createElement('img');
ratingImg.src = 'stars.png';
ratingImg.alt = '';
ratingImg.classList.add('rating');

var priceParagraph = document.createElement('p');
priceParagraph.classList.add('price');
priceParagraph.innerHTML = '$' +product.price;

namePriceDiv.appendChild(nameParagraph);
namePriceDiv.appendChild(ratingImg);
namePriceDiv.appendChild(priceParagraph);

var descriptionDiv = document.createElement('div');
descriptionDiv.classList.add('description');

var descriptionParagraph = document.createElement('p');
descriptionParagraph.innerHTML = product.description;

descriptionDiv.appendChild(descriptionParagraph);

var buyDiv = document.createElement('div');
buyDiv.classList.add('buy');

var quantityDiv = document.createElement('div');
quantityDiv.classList.add('quantity');

var quantityParagraph = document.createElement('p');
quantityParagraph.innerHTML = 'Quantity:';

var quantityInput = document.createElement('input');
quantityInput.type = 'number';
quantityInput.classList.add('product_quantity');
quantityInput.value = '1';

quantityDiv.appendChild(quantityParagraph);
quantityDiv.appendChild(quantityInput);

var addButton = document.createElement('button');
addButton.innerHTML = 'Add Quantity';
addButton.addEventListener('click', function() {
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});
buyDiv.appendChild(quantityDiv);
buyDiv.appendChild(addButton);

productDetailsContentDiv.appendChild(namePriceDiv);
productDetailsContentDiv.appendChild(descriptionDiv);
productDetailsContentDiv.appendChild(buyDiv);

productDetailsDiv.appendChild(productImg);
productDetailsDiv.appendChild(productDetailsContentDiv);
productContainer.appendChild(productDetailsDiv);


var productInformation = document.getElementById('product_information');
var productInfoDiv = document.createElement('div');
productInfoDiv.classList.add('product_info');

var titleDiv = document.createElement('div');
titleDiv.classList.add('title');

var infoDiv = document.createElement('div');
infoDiv.classList.add('info');

var productDescriptionP = document.createElement('p');
productDescriptionP.innerHTML = 'Product Description';

infoDiv.appendChild(productDescriptionP);

var addInfoDiv = document.createElement('div');
addInfoDiv.classList.add('Add_info');

var additionalInfoP = document.createElement('p');
additionalInfoP.innerHTML = 'Additional Info';


addInfoDiv.appendChild(additionalInfoP);

titleDiv.appendChild(infoDiv);
titleDiv.appendChild(addInfoDiv);


var descParagraph = document.createElement('p');
descParagraph.classList.add('desc');
descParagraph.innerHTML = product.description;

productInfoDiv.appendChild(titleDiv);
productInfoDiv.appendChild(descParagraph);

productInformation.appendChild(productInfoDiv);

})
.catch(function(error) {
  console.error('Error fetching product data:', error);
});
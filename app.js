fetch('https://fakestoreapi.com/products?limit=12')
  .then(function(response) {
    return response.json();
  })
  .then(function(products) {
    var productContainer = document.getElementById('sub_shop');
    products.forEach(function(product) {
      var firstThreeWords = product.title.split(' ').slice(0, 3).join(' ');

      var item = document.createElement('div');
      item.classList.add('item');

      var tagsDiv = document.createElement('div');
      tagsDiv.classList.add('tags');
      tagsDiv.innerHTML = product.category;
      item.appendChild(tagsDiv);

      var iconImg = document.createElement('img');
      iconImg.classList.add('icon');
      iconImg.src = 'cart.png';
      iconImg.alt = 'shop_icon';
      item.appendChild(iconImg);

      var productImg = document.createElement('img');
      productImg.classList.add('product');
      productImg.src = product.image;
      productImg.alt = product.title;
      item.appendChild(productImg);

      var productContentDiv = document.createElement('div');
      productContentDiv.classList.add('product_content');

      var productNameP = document.createElement('p');
      productNameP.innerHTML = firstThreeWords;
      productContentDiv.appendChild(productNameP);

      var ratingDiv = document.createElement('div');
      ratingDiv.classList.add('Rating');

      var hr = document.createElement('hr');
      ratingDiv.appendChild(hr);

      var priceSpan = document.createElement('span');
      priceSpan.innerHTML = '$' + product.price.toFixed(2);
      ratingDiv.appendChild(priceSpan);

      var starsImg = document.createElement('img');
      starsImg.src = 'stars.png';
      starsImg.alt = 'stars';
      ratingDiv.appendChild(starsImg);

      productContentDiv.appendChild(ratingDiv);
      item.appendChild(productContentDiv);
      productContainer.appendChild(item);
      item.addEventListener('click', function() {
        window.location.href = 'shopSingle.html?productId='+product.id;
    });
    });
  })
  .catch(function(error) {
    console.error('Error fetching product data:', error);
  });
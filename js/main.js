
    // APARECE INFO EMPRESA
    $(".informacion").mouseover(() => {
      $(".aparece").fadeIn(1000)
    });
    
    // APARECE TEXTO ROPA
    $(".h2").mouseover( () => {
      $(".textoRopa").fadeIn(1000)
    });

    // BOTON COMPRAR
    $(".comprarButton").click( () => {
       alert("Gracias por comprar en Blue store, su pedido llegara en los proximos 7 dias")
    }) 

    // FILTROS PARA PRODUCTOS
    $('.filtros .botonFiltro[category="todo"]').addClass('nuevoColor'); // SE AGREGA CLASE CON COLOR PARA QUE SIEMPRE SE MANTENGA

    // EVENTO CLICK PARA BOTON FILTRO
    $('.botonFiltro').click( function(){

        // VARIABLE QUE TRAE LA CATEGORIA DE CADA BOTON
        var catProduct = $(this).attr('category');

        // SACANDO Y AGREGANDO CLASE CON EL COLOR
        $('.botonFiltro').removeClass('nuevoColor');
        $(this).addClass('nuevoColor');

        // OCULTANDO PRODUCTOS
        $('.productItem').css('transform', 'scale(0)');

        function ocultarProductos() {
            $('.productItem').hide();
        } setTimeout(ocultarProductos,400)
        
        // MOSTRANDO PRODUCTOS POR CATEGORIA
        function mostrarProductos() {
            $('.productItem[category="'+ catProduct +'"]').show();
            $('.productItem[category="'+ catProduct +'"]').css('transform', 'scale(1)');
        } setTimeout(mostrarProductos,400)
    }); 

    // MOSTRANDO TODOS LOS PRODUCTOS
    $('.botonFiltro[category="todo"]').click(function() {
        function mostrarTodo() {
            $('.productItem').show();
            $('.productItem').css('transform', 'scale(1)');   
        } setTimeout(mostrarTodo, 400);
    })

// AGREGAR AL CARRITO DE COMPRAS
const addToShoppingCartButton = document.querySelectorAll('.itemButton');
addToShoppingCartButton.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);  
})

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer'); 

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.item');
    
    const itemTitle = item.querySelector('.itemTitulo').textContent;
    const itemPrice = item.querySelector('.itemPrecio').textContent;

    addItemToShoppingCart(itemTitle, itemPrice);
}

function addItemToShoppingCart(itemTitle, itemPrice) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
  for(let i = 0; i < elementsTitle.length; i++){
    if(elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div')
  const shoppingCartContent = `
    <div class="row shoppingCartItem">
      <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
          <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
        </div>
      </div>
      <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
          <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
        </div>
      </div>
      <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
      </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);
  
  shoppingCartRow
  .querySelector('.buttonDelete')
  .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged)

  updateShoppingCartTotal()
}

function updateShoppingCartTotal () {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
  
  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
  
  shoppingCartItems.forEach(shoppingCartItem => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice')

    const shoppingCartItemPrice = Number( shoppingCartItemPriceElement.textContent.replace('$', ''));
    
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');

    const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value)

    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  })

  shoppingCartTotal.innerHTML = `$${total}`
  
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal()
}

function quantityChanged(event) {
  const input = event.target
  if (input.value <= 0) {
    input.value = 1;
  }
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}
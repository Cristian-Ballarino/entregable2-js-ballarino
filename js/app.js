const cart = [];

    function addToCart(productName, productPrice) {
        const product = { name: productName, price: productPrice };
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item) => {
            cartItems.innerHTML += `<div class="cart-item">
                                        <span>${item.name}</span>
                                        <span>$${item.price.toFixed(2)}</span>
                                    </div>`;
            total += item.price;
        });

        cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
    }

    function generateQRCode() {
        const qrCode = document.getElementById('qr-code');
        const cartTotal = document.getElementById('cart-total').textContent.split('$')[1];
        const paymentUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?public_key=your_mercadopago_key&amount=${cartTotal}`;
        
        const qr = new QRious({
            element: qrCode,
            value: paymentUrl,
            size: 200
        });
    }
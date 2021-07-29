// const precioOriginal = 100;
// const descuento = 15;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioconDescuento,
// });

function calcularPrecioconDescuento (precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioconDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioconDescuento;
}

function clickButtonDiscount (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const precioconDescuento = calcularPrecioconDescuento(priceValue, discountValue);
    const ResultP = document.getElementById("resultP");
    ResultP.innerText = "Total a pagar: $" + precioconDescuento;
}


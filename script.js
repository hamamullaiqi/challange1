

function btnminus() {
    let jmhBarang = parseFloat(document.getElementById('jmh-barang').innerHTML) 
    
    
    // jmhBarang.innerHTML = 1
    
    let resultProduct = jmhBarang - 1


    //Total Harga 
    
   
    // console.log(resultProduct);
    
    if (jmhBarang <= 1){
        return  jmhBarang = 1
    }
    
     document.getElementById("jmh-barang").innerHTML = resultProduct
     resultPrice()
    
}


function btnplus() {
    
    let jmhBarang = parseFloat(document.getElementById('jmh-barang').innerHTML) 
    // jmhBarang.innerHTML = 1
    let resultProduct = jmhBarang + 1

    
     document.getElementById("jmh-barang").innerHTML = resultProduct
     resultPrice()
}

function resultPrice() {
    let price = parseFloat(document.getElementById('price').innerHTML) 
    let discount = parseFloat(document.getElementById('discount').innerHTML)
    let discountPrice = parseFloat(document.getElementById("discount-price").innerHTML)
    let jmhBarang = parseFloat(document.getElementById('jmh-barang').innerHTML) 

    
    
    price = 250.00
    discountPrice= price * (discount/100)

    


    
    let realPrice = price * jmhBarang
    let resultDiscountPrice = discountPrice * jmhBarang
     
    document.getElementById("discount-price").innerHTML = `$${resultDiscountPrice}.00` 
    document.getElementById("price").innerHTML = `$${realPrice}.00`
}





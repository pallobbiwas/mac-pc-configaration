//memory
document.getElementById('add-memory').addEventListener('click',function(){
    addPrice('memory-price', 300);
    //add
    const initialCost = document.getElementById('initialprice');
    const memoryPrice = document.getElementById('memory-price');
    const strogePrice = document.getElementById('storage-cost');
    const delivaryPrice = document.getElementById('delivar-cost');
    const inTotal = document.getElementById('in-total');
    inTotal.innerText = Number(initialCost.innerText) + Number(memoryPrice.innerText) + Number(strogePrice.innerText) + Number(delivaryPrice.innerText);
});
document.getElementById('remove-money').addEventListener('click',function(){
    addPrice('memory-price', 0);
    //add
    const initialCost = document.getElementById('initialprice');
    const memoryPrice = document.getElementById('memory-price');
    const strogePrice = document.getElementById('storage-cost');
    const delivaryPrice = document.getElementById('delivar-cost');
    const inTotal = document.getElementById('in-total');
    inTotal.innerText = Number(initialCost.innerText) + Number(memoryPrice.innerText) + Number(strogePrice.innerText) + Number(delivaryPrice.innerText);
});
//internal ssd
document.getElementById('remove-ssd').addEventListener('click',function(){
    addPrice('storage-cost', 0);
    //add
    const initialCost = document.getElementById('initialprice');
    const memoryPrice = document.getElementById('memory-price');
    const strogePrice = document.getElementById('storage-cost');
    const delivaryPrice = document.getElementById('delivar-cost');
    const inTotal = document.getElementById('in-total');
    inTotal.innerText = Number(initialCost.innerText) + Number(memoryPrice.innerText) + Number(strogePrice.innerText) + Number(delivaryPrice.innerText);
});
document.getElementById('add-gb-ssd').addEventListener('click',function(){
    addPrice('storage-cost', 250);
    //add
    const initialCost = document.getElementById('initialprice');
    const memoryPrice = document.getElementById('memory-price');
    const strogePrice = document.getElementById('storage-cost');
    const delivaryPrice = document.getElementById('delivar-cost');
    const inTotal = document.getElementById('in-total');
    inTotal.innerText = Number(initialCost.innerText) + Number(memoryPrice.innerText) + Number(strogePrice.innerText) + Number(delivaryPrice.innerText);
});
document.getElementById('add-tb-ssd').addEventListener('click',function(){
    addPrice('storage-cost', 500);
    //add
    const initialCost = document.getElementById('initialprice');
    const memoryPrice = document.getElementById('memory-price');
    const strogePrice = document.getElementById('storage-cost');
    const delivaryPrice = document.getElementById('delivar-cost');
    const inTotal = document.getElementById('in-total');
    inTotal.innerText = Number(initialCost.innerText) + Number(memoryPrice.innerText) + Number(strogePrice.innerText) + Number(delivaryPrice.innerText);
});
//delivary
document.getElementById('free').addEventListener('click',function(){
    addPrice('delivar-cost', 0);
    //add
    const initialCost = document.getElementById('initialprice');
    const memoryPrice = document.getElementById('memory-price');
    const strogePrice = document.getElementById('storage-cost');
    const delivaryPrice = document.getElementById('delivar-cost');
    const inTotal = document.getElementById('in-total');
    inTotal.innerText = Number(initialCost.innerText) + Number(memoryPrice.innerText) + Number(strogePrice.innerText) + Number(delivaryPrice.innerText);
});
document.getElementById('delivari-charge').addEventListener('click',function(){
    addPrice('delivar-cost', 20);
    //add
    const initialCost = document.getElementById('initialprice');
    const memoryPrice = document.getElementById('memory-price');
    const strogePrice = document.getElementById('storage-cost');
    const delivaryPrice = document.getElementById('delivar-cost');
    const inTotal = document.getElementById('in-total');
    inTotal.innerText = Number(initialCost.innerText) + Number(memoryPrice.innerText) + Number(strogePrice.innerText) + Number(delivaryPrice.innerText);
});

//function
function addPrice(priceId, value){
    const costPrice = document.getElementById(priceId);
    costPrice.innerText = value;
}
// add promocode
const promoCode = 'pallob'
document.getElementById('add-promo').addEventListener('click',function(){
    const code = document.getElementById('promo-code').value;
    if(promoCode === code){
        const discountPrice = document.getElementById('in-total');
        let withDiscount = Number(discountPrice.innerText);
        const discount = withDiscount * .3;
        withDiscount = withDiscount - discount;
        discountPrice.innerText = withDiscount;
        
        
    }
    document.getElementById('add-promo').setAttribute('disabled', true);
    document.getElementById('promo-code').value = '';
});

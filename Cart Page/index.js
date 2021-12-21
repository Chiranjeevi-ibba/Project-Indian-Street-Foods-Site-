$(document).ready(function() {
    sampleImageLinks = [
        "Resources/Aloo Chat.jpg",
        "Resources/Mirch Bajji.jpg",
        "Resources/Paani pooori.jpg",
        "Resources/Pav bhajii.jpg",
    ]
    sampleItemNames = [
        "Aloo Chat", "Mirchi Bajji", "Paani Poori", "Pav Bhaji"
    ]
    sampleRates = [
        "50", "40", "40", "60"
    ]

    let itemsAddCont = $(".un-order-cart-items")
    for(let i=0; i<=3; i++) {
        itemsAddCont.append(`
        <li class="list-item">
            <span class="each-item"><img class="item-image" src='${sampleImageLinks[i]}' ></span>
            <span class="each-item">${sampleItemNames[i]}</span>
            <span class="each-item"><i id="rupee-icon" class="fas fa-rupee-sign"></i> ${sampleRates[i]}</span>
        </li>
        `)
    }

})
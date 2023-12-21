let total = 0;
let prices = document.getElementsByClassName("price_tree")

function test(number) {
    total++

    alert(`Added ${prices[number].innerHTML} to cart.\nTotal: ${total}`)
}
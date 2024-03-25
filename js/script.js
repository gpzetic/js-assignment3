const studentInfoDiv = document.getElementById('student-info');
const pizzaOutput = document.getElementById('pizzaOutput');
const orderButton = document.getElementById('orderButton');
// Wait until the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    // Order onclick makes the pizza and tells user what they ordered
    orderButton.addEventListener('click', function() {
        studentInfoDiv.innerHTML = `<p>Student ID: 1217611 - Name: Grayson Zetic</p>`;
        const size = document.getElementById('size').value;
        const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(e => e.value);
        const sauce = Array.from(document.querySelectorAll('input[name="sauce"]:checked')).map(e => e.value);
        const pizza = new Pizza(size, toppings, sauce);
        pizzaOutput.innerHTML = pizza.describe();
    });
});
// Pizza prototype
class Pizza {
    constructor(size, toppings, sauce) {
        this.size = size;
        this.toppings = toppings;
        this.sauce = sauce;
    }

    describe() {
        if (this.sauce.length == 0) {
            this.sauce = 'no';
            
        }
        else {
            this.sauce = this.sauce.join(', ');
        }
        return `You ordered a ${this.size} pizza with ${this.toppings.join(', ')} and ${this.sauce} sauce.`;
    }
}


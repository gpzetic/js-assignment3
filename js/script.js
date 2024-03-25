// Wait until the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    const studentInfoDiv = document.getElementById('student-info');
    studentInfoDiv.innerHTML = `<p>Student ID: 1217611 - Name: Grayson Zetic</p>`;
    // Order onclick makes the pizza and tells user what they ordered
    document.getElementById('orderButton').addEventListener('click', function() {
        const size = document.getElementById('size').value;
        const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(e => e.value);
        const pizza = new Pizza(size, toppings);
        document.getElementById('pizzaOutput').innerHTML = pizza.describe();
    });
});
// Pizza prototype
class Pizza {
    constructor(size, toppings) {
        this.size = size;
        this.toppings = toppings;
    }

    describe() {
        return `You ordered a ${this.size} pizza with ${this.toppings.join(', ')}.`;
    }
}


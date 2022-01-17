function PizzaOrder(size, crust, toppings) {
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.topping = toppings;
    this.quantity = number;
    this.price = 0;
};

pizzaSelectChange = function () {
    this.flavor = $("#flavor option:selected").val();
    document.getElementById("pflavor").innerHTML = this.flavor;
    console.log(this.flavor)
}
proportionSelectChange = function () {
    this.size = $("#size option:selected").val();
    document.getElementById("psize").innerHTML = this.size;
    console.log(this.size)
}
crustySelectChange = function () {
    this.crust = $("#crust option:selected").val();
    document.getElementById("pcrust").innerHTML = this.crust;
    console.log(this.crust)
}
toppySelectChange = function () {
    this.topping = $("#topping option:selected").val();
    document.getElementById("ptoppings").innerHTML = this.topping;
    console.log(this.topping)
}
quantitySelectChange = function () {
    this.quantity = $("#number").val();
    document.getElementById("pnumber").innerHTML = this.quantity;
    console.log(this.quantity)
}
totalSelectChange = function () {
    this.price = $("#ptotal-cost").val();
    document.getElementById("ptotal-cost").innerHTML = this.price;
    console.log(this.price)
}

 function pizz (){
    let customFlavour = $("#flavour option:selected").val();
        let customSize = $("#size option:selected").val();
        let toppings= $("#toppings").val();
        let customCrust = $("#crust").val();
        let customQuantity = $("#quantity option:selected").val();

        if (customToppings == "pinapple") {
            customToppings = 200
        }
        else if (customToppings == " green pepper") {
            customToppings = 100
        }
        else if (customToppings == "mushroom") {
            customToppings = 250
        }
        else if (customToppings == "bacon") {
            customToppings = 300
        }
        if (customSize == "Extra large") {
            sizePrice = 1500;
        }
        else
        if (customSize == "Large") {
           sizePrice = 1250;
       }
       else if (customSize == "Medium") {
           sizePrice = 600;
       }
       else if (customSize == "Small") {
           sizePrice = 500;
       }
       else(sizePrice == 0);
       if (customCrust == "Thin") {
        crustPrice = 200;
    }
    else if (customCrust == "Thick") {
        crustPrice = 300;
    }
    else if (customCrust == "DoubleStack") {
        crustPrice = 500;
    }
    else {
        crustPrice = 0;
    }
    totalCost = sizePrice + crustPrice + (customToppings);
    totalCost = totalCost * quantity; 
    alert("You have selected "+customSize+" Pizza."+"\n"+" with "+customCrust+" as crust and"+"\n"+" with "+customToppings+" as toppings"+"Total price is Ksh."+totalCost);
    
    }
 

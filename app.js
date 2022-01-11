const calculator = {
    add: function(a, b){
        console.log(a + b);
    },

    sub: function(a, b){
        console.log(a - b);
    },

    multi: function(a, b){
        console.log(a * b);
    },

    divide: function(a, b){
        console.log(a/b);
    },

    powerOf: function(a, b){
        console.log(a**b);
    },
};

calculator.add(2, 3);
calculator.sub(27, 5);
calculator.multi(5, 6);
calculator.divide(40, 8);
calculator.powerOf(2, 4);
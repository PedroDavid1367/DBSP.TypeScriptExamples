console.log("Hello TypeScript");
var greeting = function (message) {
    console.log(message);
};
var es6Greeting = function (message) {
    if (message === void 0) { message = "Hello"; }
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var result = message;
    if (rest) {
        for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
            var word = rest_1[_a];
            console.log(result += " " + word + " ");
        }
    }
    console.log(message);
};
es6Greeting();
var Color;
(function (Color) {
    Color[Color["Beige"] = 0] = "Beige";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var ColorManager = (function () {
    function ColorManager(title, color) {
        this.title = title;
        this.color = color;
    }
    ColorManager.prototype.print = function () {
        console.log(this.title + " - " + this.color);
    };
    return ColorManager;
}());
var testedColor = new ColorManager("The manager", Color.Beige);
testedColor.print();
var unknown = "strong";
console.log(unknown.toUpperCase());
var myAdd = function (a, b) {
    return a + b;
};
console.log(myAdd(1, 2));
var strongSum = function (a, b, c) {
    return a + b + c;
};
strongSum(1, 2, 3);
var printFullName = function (fullname) {
    return fullname.name + " " + fullname.lastName;
};
var eg = function (o) {
    return o.name + " " + o.age;
};

$('.container-fluid').animate({ width: '100%' }, 2000).animate({ height: '100%' }, 2000, function () {
    $('h3').slideDown(1000, function () {
        $('.col-md-4').slideDown(1000)
    })
})



let staff = function (name, age, title, salary, managers) {
    this.name = name;
    this.age = age;
    this.description = title;
    this.salary = function () {
        console.log(`Your Salay is ${this.salary + 1000}`)
    }


}
staff.prototype.managers = ["tamer"]
let omina = new staff("omnia", 22, "developer", 1000)
omina.managers.push("taha")
let kholoud = new staff("kholoud", 22, "developer", 1000)
console.log(kholoud)
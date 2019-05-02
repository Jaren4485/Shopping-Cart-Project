var shoes = [];
var price = [];
var brand = [];
$(".add").click(function(){
    var shoe = $(".shoes").val();
    var prices = $(".value").val();
    var brands = $(".brand").val();
    $(".cart").append(shoe);
});

$(".done").click(function(){
    
});
console.log(brand,shoes,price);
// $(".guestList").append("<li>"+guest+"</li>");
//});
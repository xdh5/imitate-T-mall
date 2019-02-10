$(function(){
	$("header").load("public_head2.html")
	$("footer").load("public_foot.html")
})
// 全选框
$(function(){
	$("#allCheck").click(function(){
		if($(this).prop("checked")){
			$(".eachChecked").prop("checked",true)
		}
		else{
			$(".eachChecked").prop("checked",false)
		}
	})
})
// 数量
$(function(){
	$(".plus").click(function(){
		var i = parseInt($(this).siblings("input").val())
		i = i+1
		$(this).siblings("input").val(i)
	})
	$(".sub").click(function(){
		var i = parseInt($(this).siblings("input").val())
		if(i>0){
			i = i-1
		}
		$(this).siblings("input").val(i)
	})
})
// 金额,已选商品,合计
$(function(){
	$(".plus,.sub").click(function(){
		// 金额
		var n = parseFloat($(this).siblings("input").val())
		var p = parseFloat($(this).parents("tr").find(".newPrice").text().substring(1))
		$(this).parents("tr").find(".finalPrice").text("￥"+ n*p)
	})
})
function myTotol(){
	//已选商品
	var x = 0
	var totalNumber = $(".checkNumber").each(function () {
		x = x + parseInt($(this).val())
	});
	$("#totalNumber").text(x)
	// 合计
	var i = 0
	var totalPrice = $(".finalPrice").each(function () {
		i = i + parseFloat($(this).text().substring(1))
	});
	$("#totalPrice").text("￥" + i)
	//结算
	if(i>=1){
		$(".shoppingCart-count button").css("background-color","#C40000")
	}
	else{
		$(".shoppingCart-count button").css("background-color","#AAAAAA")
	}
}
// 删除
$(function(){
	$(".myDelete").click(
		function(){
			var y = confirm("亲亲这边要确认您是否要删除该商品呢！")
			if(y == true){
				$(this).parents("tr").remove()
			}
		}
	)
})
setInterval(myTotol,10)
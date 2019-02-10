$(function(){
	$("header").load("public_head2.html")
	$("footer").load("public_foot.html")
})
// 改变图片
$(function(){
	$(".my-Thumbnail").click(function(){
		var p = $(this).attr("src")
		$("#bigImg").attr("src",p)
	})
})
// 添加数量
$(function(){
	$("#product-up").click(function(){
		var i = parseInt($("#product-myNumber").val())
		i=i+1
		$("#product-myNumber").val(i)
	})
	$("#product-down").click(function(){
		var i = parseInt($("#product-myNumber").val())
		if(i>0){
			i=i-1
		}
		$("#product-myNumber").val(i)
	})
})
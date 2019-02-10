$(function(){
	$("header").load("public_head2.html")
	$("footer").load("public_foot.html")
})
$(function(){
	$(".myOrder-delete").click(function(){
		if(confirm("真的删吗？")==true){
		$(this).parents("table").remove()
		}
	})
})
$(function(){
	$(".nav-link").click(function(){
		$(".myTable").hide()
		var i = $(this).attr("id")
		$("."+i).show()
	})
})
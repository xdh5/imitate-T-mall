$(function(){
	$("header").load("public_head1.html")
	$("footer").load("public_foot.html")
})
// 鼠标悬停菜单
$(function(){
	$(".myDropdown").mouseenter(function(){
		$("#myDropdown-menu").show()
	})
	$(".myDropdown").mouseleave(function(){
		$("#myDropdown-menu").hide()
	})
	$(".myDropdown-menu").mouseenter(function(){
		var i=$(this).attr("id")
		$("#product"+i).show()
	})
	$(".myDropdown-menu").mouseleave(function(){
		$(".myDropdown-item").hide()
	})
	$(".myDropdown-item").mouseenter(function(){
		$(this).show()
	})
	$(".myDropdown-item").mouseleave(function(){
		$(this).hide()
	})
})
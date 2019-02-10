$(function(){
	$("header").load("public_head1.html")
	$("footer").load("public_foot.html")
})
// 筛选
$(function(){
	$("#select").click(function(){
	var maxp = $("input[name='max']").val()
	var minp = $("input[name='min']").val()
	var p = []
	$(".category-productPrice").each(function(){
		var i =  Number($(this).text().substring(1))
		p.push(i)
	})
	for(var n=0;n<p.length;n++){
		if(p[n]<minp || p[n]>maxp){
			$(".category-product:eq("+n+")").hide()
			}
		else{
			$(".category-product:eq("+n+")").show()
			}
		}
	})
})
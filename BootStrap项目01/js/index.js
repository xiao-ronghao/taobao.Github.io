$(function(){
	// 关注微信公众号
	$("#QR").hover(function(){
		$(this).children("img").css("display","block");
	},function(){
		$(this).children("img").css("display","none");
	})
	
	$(window).on("resize", function () {
	    // 1.1 获取窗口的宽度
	    let clientW = $(window).width();
	    // console.log(clientW);
	
	    // 1.2 设置临界值
	    let isShowBigImage = clientW >= 800;
	
	    // 1.3 获取所有的item
	    let $allItems = $("#lk_carousel .item");
	    // console.log($allItems);
	
	    // 1.4 遍历
	    $allItems.each(function (index, item) {
	        // 1.4.1 取出图片的路径
	        let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
	        let imgUrl = 'url("' + src +'")';
	
	        // 1.4.2 设置背景
	        $(item).css({
	            backgroundImage: imgUrl
	        });
	
	        // 1.4.3 设置img标签
	        if(!isShowBigImage){
	            let $img = "<img src='" + src + "'>";
	            $(item).empty().append($img);
	        }else {
	            $(item).empty();
	        }
	
	    });
	});
	
	$(window).trigger("resize");
})
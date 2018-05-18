$(document).ready(function(){		
	var timer = setInterval(function(){
	if(flag == true){
			$("#slider-l").animate({
			opacity:1,
			left:180
		},3000);
		$("#bg").animate({
			left:"-200px"
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'35px',
			opacity:1

		},3000);
		$(".slider-l-l,.slider-l-l h5,.slider-l-l p").stop().animate({
			fontSize:'20px',
			opacity:1

		})
		$("#slider-r").animate({
			opacity:0.0,
			left:50,
			display:'none'
		})
		$(".slider-r-r h3,.slider-r-r h5,.slider-r-r p").animate({
			fontSize:10,
			opacity:0,
			display:'none'

		})
			$("#li-1").css("background-color","#1f96f2")
			$("#li-2").css("background-color","")
		flag = false
	}else{
		$("#slider-l").animate({
			opacity:0.00,
			left:50,
			display:'none'
		},3000);
		$("#bg").animate({
			left:'800px'
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'20px',
			display:'none',
			opacity:0
		},3000);
		$(".slider-l-l h5,p").stop().animate({
			fontSize:'15px',
			display:'none',
			opacity:0
		})
		$("#slider-r").animate({
			opacity:1,
			left:180,
			display:'block'
		})
		$(".slider-r-r").animate({
			display:'block',
			opacity:1,
		})
		$(".slider-r-r h3").animate({
			fontSize:35,
			opacity:1,
			display:'block'
		})
		$(".slider-r-r h5,.slider-r-r p").animate({
			fontSize:20,
			opacity:1,
			display:'block'

		})
		flag = true
			$("#li-1").css("background-color","")
			$("#li-2").css("background-color","#1f96f2")

	}
	},3000)
		var flag = true
		$(".btn-l").click(function(){
	if(flag == true){
		 clearInterval(timer)
		$("#slider-l").animate({
			opacity:1,
			left:180
		},3000);
		$("#bg").animate({
			left:"-200px"
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'35px',
			opacity:1

		},3000);
		$(".slider-l-l,.slider-l-l h5,.slider-l-l p").stop().animate({
			fontSize:'20px',
			opacity:1

		})
		$("#slider-r").animate({
			opacity:0.0,
			left:50,
			display:'none'
		})
		$(".slider-r-r h3,.slider-r-r h5,.slider-r-r p").animate({
			fontSize:10,
			opacity:0,
			display:'none'

		})
			$("#li-1").css("background-color","#1f96f2")
			$("#li-2").css("background-color","")	
		flag = false
	}else{
		 clearInterval(timer)
		$("#slider-l").animate({
			opacity:0.00,
			left:50,
			display:'none'
		},3000);
		$("#bg").animate({
			left:800
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'20px',
			display:'none',
			opacity:0
		},3000);
		$(".slider-l-l h5,p").stop().animate({
			fontSize:'15px',
			display:'none',
			opacity:0

		})
		$("#slider-r").animate({
			opacity:1,
			left:180,
			display:'block'
		})
		$(".slider-r-r").animate({
			display:'block',
			opacity:1,
		})
		$(".slider-r-r h3").animate({
			fontSize:35,
			opacity:1,
			display:'block'
		})
		$(".slider-r-r h5,.slider-r-r p").animate({
			fontSize:20,
			opacity:1,
			display:'block'
		})
		flag = true
			$("#li-1").css("background-color","")
			$("#li-2").css("background-color","#1f96f2")

	}
	})
		var flag = true
		$(".btn-r").click(function(){
	if(flag == true){
		 clearInterval(timer)
	$("#li-1").css("background-color","#1f96f2")
			$("#li-2").css("background-color","")
		$("#slider-l").animate({
			opacity:1,
			left:180
		},3000);
		$("#bg").animate({
			left:"-200px"
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'35px',
			opacity:1

		},3000);
		$(".slider-l-l,.slider-l-l h5,.slider-l-l p").stop().animate({
			fontSize:'20px',
			opacity:1

		})
		$("#slider-r").animate({
			opacity:0.0,
			left:50,
			display:'none'
		})
		$(".slider-r-r h3,.slider-r-r h5").animate({
			fontSize:10,
			opacity:0,
		})
		$(".slider-r-r p").animate({
			fontSize:10,
			opacity:0.0,
			display:'none'
		})
		flag = false
	}else{
		 clearInterval(timer)

		$("#li-1").css("background-color","")
			$("#li-2").css("background-color","#1f96f2")

		$("#slider-l").animate({
			opacity:0.00,
			left:50,
			display:'none'
		},3000);
		$("#bg").animate({
			left:800
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'20px',
			display:'none',
			opacity:0
		},3000);
		$(".slider-l-l h5,p").stop().animate({
			fontSize:'15px',
			display:'none',
			opacity:0

		})
		$("#slider-r").animate({
			opacity:1,
			left:180,
			display:'block'
		})
		$(".slider-r-r").animate({
			display:'block',
			opacity:1,

		})
		$(".slider-r-r h3").animate({
			fontSize:35,
			opacity:1,
			display:'block'
		})
		$(".slider-r-r h5,.slider-r-r p").animate({
			fontSize:20,
			opacity:1,
			display:'block'
		})
		flag = true
	}
	})
	$(".banner").mouseover(function(){
		clearInterval(timer)
	})
	$(".banner-box").mouseleave(function(){
	 timer = setInterval(function(){
	if(flag == true){
			$("#slider-l").animate({
			opacity:1,
			left:180
		},3000);
		$("#bg").animate({
			left:"-200px"
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'35px',
			opacity:1

		},3000);
		$(".slider-l-l,.slider-l-l h5,.slider-l-l p").stop().animate({
			fontSize:'20px',
			opacity:1

		})
		$("#slider-r").animate({
			opacity:0.0,
			left:50,
			display:'none'
		})
		$(".slider-r-r h3,.slider-r-r h5,.slider-r-r p").animate({
			fontSize:10,
			opacity:0,
			display:'none'

		})
			$("#li-1").css("background-color","#1f96f2")

			$("#li-2").css("background","")
		flag = false
	}else{
		$("#slider-l").animate({
			opacity:0.00,
			left:50,
			display:'none'
		},3000);
		$("#bg").animate({
			left:800
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'20px',
			display:'none',
			opacity:0
		},3000);
		$(".slider-l-l h5,p").stop().animate({
			fontSize:'15px',
			display:'none',
			opacity:0

		})
		$("#slider-r").animate({
			opacity:1,
			left:180,
			display:'block'
		})
		$(".slider-r-r").animate({
			display:'block',
			opacity:1,

		})
		$(".slider-r-r h3").animate({
			fontSize:35,
			opacity:1,
			display:'block'
		})
		$(".slider-r-r h5,.slider-r-r p").animate({
			fontSize:20,
			opacity:1,
			display:'block'

		})
		flag = true
			$("#li-1").css("background-color","")
			$("#li-2").css("background-color","#1f96f2")

	}
	},3000)	
	})
	var flag = true
		$("#li-1").click(function(){
	if(flag == true){
		 clearInterval(timer)
		$("#slider-l").animate({
			opacity:1,
			left:180
		},3000);
		$("#bg").animate({
			left:"-200px"
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'35px',
			opacity:1

		},3000);
		$(".slider-l-l,.slider-l-l h5,.slider-l-l p").stop().animate({
			fontSize:'20px',
			opacity:1

		})
		$("#slider-r").animate({
			opacity:0.0,
			left:50,
			display:'none'
		})
		$(".slider-r-r h3,.slider-r-r h5,.slider-r-r p").animate({
			fontSize:10,
			opacity:0,
			display:'none'

		})
			$("#li-1").css("background-color","#1f96f2")

			$("#li-2").css("background-color","")

		flag = false
	}else{
		 clearInterval(timer)
		$("#slider-l").animate({
			opacity:0.00,
			left:50,
			display:'none'
		},3000);
		$("#bg").animate({
			left:800
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'20px',
			display:'none',
			opacity:0
		},3000);
		$(".slider-l-l h5,p").stop().animate({
			fontSize:'15px',
			display:'none',
			opacity:0

		})
		$("#slider-r").animate({
			opacity:1,
			left:180,
			display:'block'
		})
		$(".slider-r-r").animate({
			display:'block',
			opacity:1,

		})
		$(".slider-r-r h3").animate({
			fontSize:35,
			opacity:1,
			display:'block'
		})
		$(".slider-r-r h5,.slider-r-r p").animate({
			fontSize:20,
			opacity:1,
			display:'block'
		})
		flag = true
			$("#li-1").css("background-color","")
			$("#li-2").css("background-color","#1f96f2")

	}
	})
		var flag = true
		$("#li-2").click(function(){
	if(flag == true){
		 clearInterval(timer)
	$("#li-1").css("background-color","#1f96f2")
			$("#li-2").css("background-color","")
		$("#slider-l").animate({
			opacity:1,
			left:180
		},3000);
		$("#bg").animate({
			left:"-200px"
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'35px',
			opacity:1

		},3000);
		$(".slider-l-l,.slider-l-l h5,.slider-l-l p").stop().animate({
			fontSize:'20px',
			opacity:1

		})
		$("#slider-r").animate({
			opacity:0.0,
			left:50,
			display:'none'
		})
		$(".slider-r-r h3,.slider-r-r h5").animate({
			fontSize:10,
			opacity:0,
		})
		$(".slider-r-r p").animate({
			fontSize:10,
			opacity:0.0,
			display:'none'
		})
		flag = false
	}else{
		 clearInterval(timer)
		$("#li-1").css("background-color","")
			$("#li-2").css("background-color","#1f96f2")
		$("#slider-l").animate({
			opacity:0.00,
			left:50,
			display:'none'
		},3000);
		$("#bg").animate({
			left:800
		},3000);
		$(".slider-l-l h3").stop().animate({
			fontSize:'20px',
			display:'none',
			opacity:0
		},3000);
		$(".slider-l-l h5,p").stop().animate({
			fontSize:'15px',
			display:'none',
			opacity:0

		})
		$("#slider-r").animate({
			opacity:1,
			left:180,
			display:'block'
		})
		$(".slider-r-r").animate({
			display:'block',
			opacity:1,

		})
		$(".slider-r-r h3").animate({
			fontSize:35,
			opacity:1,
			display:'block'
		})
		$(".slider-r-r h5,.slider-r-r p").animate({
			fontSize:20,
			opacity:1,
			display:'block'
		})
		flag = true
	}
	})

$(".nav-left").mouseenter(function(){
	$(".nav-l-t,.nav-l-b").animate({
		opacity:0
	})
	$(".nav-left-lst").show(600)
})

$(".nav-left").mouseleave(function(){
	$(".nav-l-t,.nav-l-b").animate({
		opacity:1
	})
	$(".nav-left-lst").hide()	
})
$(".nav-center").mouseenter(function(){
	$(".nav-c-t,.nav-c-b").animate({
		opacity:0
	})
	$(".nav-center-lst").show(600)
})

$(".nav-center").mouseleave(function(){
	$(".nav-c-t,.nav-c-b").animate({
		opacity:1
	})
	$(".nav-center-lst").hide()	
})
$(".nav-right").mouseenter(function(){
	$(".nav-r-t,.nav-r-b").animate({
		opacity:0
	})
	$(".nav-right-lst").show(600)
})

$(".nav-right").mouseleave(function(){
	$(".nav-r-t,.nav-r-b").animate({
		opacity:1
	})
	$(".nav-right-lst").hide()	
})
})
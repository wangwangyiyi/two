$(document).ready(function(){
			
	var timer = setInterval(function(){
	if(flag == true){
			$("#slider-l").animate({
			opacity:1,
			left:180
		},1000);
		$("#bg").animate({
			left:"-100px"
		},500);
		$(".slider-l-l h3").stop().animate({
			fontSize:'35px',
			opacity:1

		},1000);
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
			$("#li-1").css("background-color","blue")
			$("#li-2").css("background","")
		flag = false
	}else{
		$("#slider-l").animate({
			opacity:0.00,
			left:50,
			display:'none'
		},1000);
		$("#bg").animate({
			left:0
		},500);
		$(".slider-l-l h3").stop().animate({
			fontSize:'20px',
			display:'none',
			opacity:0
		},1000);
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
			$("#li-2").css("background","blue")
	}
	},2000)
	// $(".banner").mouseover(function(){
	// 	clearInterval(timer)
	// 	console.log("jinlqile")
	// })
	// $(".banner").mouseleave(function(){
	// 	 clearInterval(timer)
	//  setInterval(
	// 	function(){
	// if(flag == true){		
	// 		$("#slider-l").animate({
	// 		opacity:1,
	// 		left:233
	// 	},1000);
	// 	$("#bg").animate({
	// 		left:"-100px"
	// 	},500);
	// 	$(".slider-l-l h3").stop().animate({
	// 		fontSize:'35px',
	// 		opacity:1

	// 	},1000);
	// 	$(".slider-l-l,.slider-l-l h5,.slider-l-l p").stop().animate({
	// 		fontSize:'20px',
	// 		opacity:1

	// 	})
	// 	$("#slider-r").animate({
	// 		opacity:0.0,
	// 		left:50,
	// 		display:'none'
	// 	})
	// 	$(".slider-r-r h3,.slider-r-r h5,.slider-r-r p").animate({
	// 		fontSize:10,
	// 		opacity:0,
	// 		display:'none'

	// 	})
	// 		$("#li-1").css("background-color","blue")
	// 		$("#li-2").css("background","")
	// 	flag = false
	// }else{
	// 	clearInterval(timer)

	// 	$("#slider-l").animate({
	// 		opacity:0.00,
	// 		left:50,
	// 		display:'none'
	// 	},1000);
	// 	$("#bg").animate({
	// 		left:0
	// 	},500);
	// 	$(".slider-l-l h3").stop().animate({
	// 		fontSize:'20px',
	// 		display:'none',
	// 		opacity:0
	// 	},1000);
	// 	$(".slider-l-l h5,p").stop().animate({
	// 		fontSize:'15px',
	// 		display:'none',
	// 		opacity:0

	// 	})
	// 	$("#slider-r").animate({
	// 		opacity:1,
	// 		left:233,
	// 		display:'block'
	// 	})
	// 	$(".slider-r-r").animate({
	// 		display:'block',
	// 		opacity:1,

	// 	})
	// 	$(".slider-r-r h3").animate({
	// 		fontSize:35,
	// 		opacity:1,
	// 		display:'block'
	// 	})
	// 	$(".slider-r-r h5,.slider-r-r p").animate({
	// 		fontSize:20,
	// 		opacity:1,
	// 		display:'block'

	// 	})
	// 	flag = true
	// 		$("#li-1").css("background-color","")
	// 		$("#li-2").css("background","blue")


	// }
	// },2000)

			
	// 	console.log("ji")})
		var flag = true
		$(".btn-l").click(function(){
	if(flag == true){
		 clearInterval(timer)
		$("#slider-l").animate({
			opacity:1,
			left:180
		},1000);
		$("#bg").animate({
			left:"-100px"
		},500);
		$(".slider-l-l h3").stop().animate({
			fontSize:'35px',
			opacity:1

		},1000);
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
		// var sl = document.getElementById("slider-l");
		// var slop = sl.style.opacity;
		// console.log(slop)
		// if(slop >0.5){
			$("#li-1").css("background-color","blue")
			$("#li-2").css("background","")

		// }	
		flag = false
	}else{
		 clearInterval(timer)
		$("#slider-l").animate({
			opacity:0.00,
			left:50,
			display:'none'
		},1000);
		$("#bg").animate({
			left:0
		},500);
		$(".slider-l-l h3").stop().animate({
			fontSize:'20px',
			display:'none',
			opacity:0
		},1000);
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
			$("#li-2").css("background","blue")

	}

	})
		var flag = true
		$(".btn-r").click(function(){
	if(flag == true){
		 clearInterval(timer)
	$("#li-1").css("background-color","blue")
			$("#li-2").css("background","")
		$("#slider-l").animate({
			opacity:1,
			left:180
		},1000);
		$("#bg").animate({
			left:"-100px"
		},500);
		$(".slider-l-l h3").stop().animate({
			fontSize:'35px',
			opacity:1

		},1000);
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
		console.log("noihao")
	}else{
		 clearInterval(timer)

		$("#li-1").css("background-color","")
			$("#li-2").css("background","blue")
		$("#slider-l").animate({
			opacity:0.00,
			left:50,
			display:'none'
		},1000);
		$("#bg").animate({
			left:0
		},500);
		$(".slider-l-l h3").stop().animate({
			fontSize:'20px',
			display:'none',
			opacity:0
		},1000);
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
		console.log("jinlqile")
	})
	$(".banner-box").mouseleave(function(){
		 // clearInterval(timer)
	 timer = setInterval(function(){
	if(flag == true){
			$("#slider-l").animate({
			opacity:1,
			left:180
		},1000);
		$("#bg").animate({
			left:"-100px"
		},500);
		$(".slider-l-l h3").stop().animate({
			fontSize:'35px',
			opacity:1

		},1000);
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
			$("#li-1").css("background-color","blue")
			$("#li-2").css("background","")
		flag = false
	}else{
		$("#slider-l").animate({
			opacity:0.00,
			left:50,
			display:'none'
		},1000);
		$("#bg").animate({
			left:0
		},500);
		$(".slider-l-l h3").stop().animate({
			fontSize:'20px',
			display:'none',
			opacity:0
		},1000);
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
			$("#li-2").css("background","blue")
	}
	},2000)	
	 console.log("mefk")})	
		
	})
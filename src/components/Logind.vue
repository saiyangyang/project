<template>
	<div style="margin-top: 50px;">
		<mt-header fixed title="">
			<router-link to="/" slot="right">
			   <mt-button class="iconfont icon-shezhi" style="margin-left: 20px;font-size: 22px;"></mt-button>
			</router-link>
			<router-link to="/" slot="right">
			   <mt-button class="iconfont icon-lingdang" style="margin-left: 10px;font-size: 22px;"></mt-button>
			</router-link>
			
		</mt-header>

	  
		<section>
	  		<div class="logi">
	  			<div class="let">
	  				
	  				
	  				
	  			</div>
	  		</div>
	  	</section>
	  	<article>
	  		<h4>我的钱包</h4>
	  		<div class="shi">
	  			<dl><dt><i class="iconfont icon-fapiao"></i></dt><dd><router-link to="/about" tag="span">我的卡包</router-link></dd></dl>
	  			<dl><dt><i class="iconfont icon-hongbao"></i></dt><dd><router-link to="/home" tag="span">我的红包</router-link></dd></dl>
	  			<dl><dt><i class="iconfont icon-tuijian"></i></dt><dd><router-link to="/home" tag="span">邀请好友</router-link></dd></dl>
	  			
	  		</div>
	  	</article>
	  	<div class="middle">
	  		<div class="fir">
	  				<dl><dt><i class="iconfont icon-yaoqing"></i></dt><dd><router-link to="/about" tag="span">签到</router-link></dd></dl>
	  				<dl><dt><i class="iconfont icon-1xinyuandan"></i></dt><dd><router-link to="/home" tag="span">心愿单</router-link></dd></dl>
	  				<dl><dt><i class="iconfont icon-home"></i></dt><dd><router-link to="/home" tag="span">足迹</router-link></dd></dl>
	  		</div>
	  		<div class="sec">
	  				<dl><dt><i class="iconfont icon-fapiao"></i></dt><dd><router-link to="/about" tag="span">开具发票</router-link></dd></dl>
		  			<dl><dt><i class="iconfont icon-yijianfankui1"></i></dt><dd><router-link to="/home" tag="span">我的点评</router-link></dd></dl>
		  			<dl><dt><i class="iconfont icon-yijianfankui"></i></dt><dd><router-link to="/home" tag="span">测评</router-link></dd></dl>
	  		</div>	
	  	</div>
	  	<div class="llo">
	  		
	  	</div>
	</div>
</template>

<script>
	export default{
		name:"Logind"
		
	}
	
	
</script>

<style>
	
	*{
		margin: 0;
		padding: 0;
	}
	
	
	.llo{
		height:38vh;
	}
	
	.middle {
		height: 35vh;
		background: #ccc;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.middle dl{
		margin: 10px 0;
		width: 33.33vw;
		
	}
	.middle dd{
		display: flex;
		justify-content: center;
	}
	.sec,.fir{
		display: flex;
		justify-content: space-around;
	}
	dl{
		display: flex;
		flex-direction: column;
		
	}
	dt{
		display: flex;
		justify-content: center;
	}
	dl .iconfont{
		font-size: 28px;
	}
	.shi{
		display: flex;
		justify-content: space-around;
		margin: 20px 0;
	}
	section{
		margin-top: 60px;
		width: 90vw;
		height: 20vh;
		background: #ccc;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	}
	.logi{
		border:1px solid white;
		height: 5vh;
		width: 30vw;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	article h4{
		color:#000;
		font-size: 14x;
		margin: 5px;
	}
</style>
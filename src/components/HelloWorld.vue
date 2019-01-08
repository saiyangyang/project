<template>
  <div class="hello">
  	<header>
  			
  	</header>
  	<div class="yi">
  		<router-view @toparent="getdata" ></router-view>
	  	
  	</div>
  	<footer>
  			<dl><dt><i class="iconfont icon-icon_share"></i></dt><dd><router-link to="/share" tag="span">分享</router-link></dd></dl>
  			<dl><dt><i class="iconfont icon-tuijian1"></i></dt><dd><router-link to="/happen" tag="span">发现</router-link></dd></dl>
		  	<dl><dt><i class="iconfont icon-fapiao"></i></dt><dd><router-link to="/recommend" tag="span">订单</router-link></dd></dl>
		  	<dl><dt><i class="iconfont icon-home"></i></dt><dd><router-link to="/home" tag="span">我的</router-link></dd></dl>
  	</footer>
  </div>
</template>

<script>
	
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
	  	getdata(){
	  		
	  		
	  	}
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.router-link-active{
		color: yellowgreen;
	}
	.hello{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
	footer{
		flex-shrink: 0;
		align-items: center;
		background:dodgerblue;
		height: 12vh;
		display: flex;
		justify-content: space-around;
	}
	.yi{
		overflow: auto;
		flex: 1;
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
	
	*{
		margin: 0;
		padding: 0;
	}
	
	
</style>

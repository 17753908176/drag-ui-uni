<template>
	<el-container class="container">
	  <el-header>
		  <LHeader></LHeader>
	  </el-header>
	  <el-container>
	   <!-- <el-aside width="200px">
			<LLeft></LLeft>
		</el-aside> -->
	    <el-main>
			<LCenter>
				
			</LCenter>
		</el-main>
	  </el-container>
	</el-container>
</template>

<script>
	import LHeader from '../../components/layout/LHeader.vue'
	import LCenter from '../../components/layout/LCenter.vue'
	export default {
		components:{
			LHeader,
			LCenter
		}
	}
</script>

<style lang="scss">
	.container{
		height: 100%;
	}
	.el-header, .el-footer {
		background-color: white;
		color: #333;
		text-align: center;
		line-height: 60px;
		border-bottom: #c8c7cc solid 1px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		z-index: 100;
	}
</style>
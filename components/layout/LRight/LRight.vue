<template>
	<view class="right-container">
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
		    <el-tab-pane label="目录" name="directory">
				<Catalog></Catalog>
			</el-tab-pane>
		    <el-tab-pane label="属性" name="attributes">
				<view class="" v-slot="attributes">
					
				</view>
			</el-tab-pane>
		    <el-tab-pane label="接口" name="api">
				<view class="" v-slot="api">
					
				</view>
			</el-tab-pane>
		  </el-tabs>
	</view>
</template>

<script>
	import Catalog from './components/catalog.vue'
	export default {
		components:{
			Catalog
		}
	}
</script>

<style lang="scss">
	.right-container{
		width: 300px;
		height: 100%;
		background: #ffffff;
		border-left: #c8c7cc solid 1px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
	}
</style>
<template>
	<view class="center">
		<LLeft class="left"></LLeft>
		<view class="main">
			22222
		</view>
		<LRight class="right">
			<view  v-slot:directory >
				2222222
			</view>
		</LRight>
	</view>
</template>

<script>
	import LRight from '@/components/layout/LRight/LRight.vue'
	import LLeft from '@/components/layout/LLeft.vue'
	export default {
		components:{
			LLeft,
			LRight
		}
	}
</script>

<style scoped lang="scss">
	.center{
		display: flex;
		height: 100%;
		// flex: 1;
		// justify-content: center;
	}
	.main{
		    flex: 1 1 0%;
		    display: flex;
		    -webkit-box-orient: vertical;
		    -webkit-box-direction: normal;
		    flex-direction: column;
		    z-index: 10;
			margin: 0 15px;
	}

</style>
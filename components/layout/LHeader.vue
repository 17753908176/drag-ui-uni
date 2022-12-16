<template>
	<el-row>
		<el-col :span="6">
			<view style="display: flex;justify-content: flex-start;align-items: center;color: #675e6f">
				<h2>DragUI</h2>
			</view>
		</el-col>
		<el-col :span="12">
			<view>
				工具栏
				<!-- <el-select v-model="centerValue" placeholder="请选择" size="mini"  style="width: 130px">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select> -->
			</view>
		</el-col>
		<el-col :span="6">
			<el-row :gutter="20">
				<el-col :span="6">
					<el-dropdown @command="handleCommand">
					  <span class="el-dropdown-link">
					    创建<i class="el-icon-arrow-down el-icon--right"></i>
					  </span>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item command="project">创建项目</el-dropdown-item>
					    <el-dropdown-item command="page">创建页面</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
				</el-col>
				<el-col :span="6">
					<el-button size="small" type="success">导入项目</el-button>
				</el-col>
				<el-col :span="6">
					<el-button size="small" type="info">重置页面</el-button>
				</el-col>
				<el-col :span="6">
					<el-button size="small" type="warning">预览</el-button>
				</el-col>
			</el-row>
		</el-col>
	</el-row>
</template>

<script>
	import foldertemp from '@/common/foldertemplate.js'
	export default {
		name: 'LHeader',
		data() {
			return {
				options: [{
					value: 'page',
					label: '页面模式'
				}, {
					value: 'component',
					label: '组件模式'
				}],
			}
		},
		mounted() {
			console.log(foldertemp);
		},
		methods:{
			handleCommand(v){
				if(v == 'project'){//创建项目
					this.createProject()
				}else{//创建页面
					
				}
				console.log(v);
			},
			createProject(){
				this.$store.commit('setProject',foldertemp)
			}
		}
	}
</script>

<style scoped>
</style>

<template>
	<view>
		<view class="select-container">
			<el-select v-model="value" placeholder="请选择现有项目">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
		</view>

		<el-tree :data="data" node-key="id" :expand-on-click-node="false">
			<div class="custom-tree-node" slot-scope="{ node, data }">
				<span>
					<svg class="icon" aria-hidden="true">
						<use v-bind:xlink:href="'#icon' + data.type"></use>
					</svg>{{ node.label }}</span>
				<span>
					<i class="el-icon-plus" style="margin-right:15px"></i>
					<i class="el-icon-delete"></i>
				</span>
			</div>
		</el-tree>
	</view>

</template>

<script>
	import folderTmp from '@/common/foldertemplate.js'
	import iconFont from 'static/iconfont'
	export default {
		data() {
			const data = folderTmp;
			return {
				data: JSON.parse(JSON.stringify(data)),
				data: JSON.parse(JSON.stringify(data)),
				options: [{
				          value: '选项1',
				          label: '黄金糕'
				        }, {
				          value: '选项2',
				          label: '双皮奶'
				        }, {
				          value: '选项3',
				          label: '蚵仔煎'
				        }, {
				          value: '选项4',
				          label: '龙须面'
				        }, {
				          value: '选项5',
				          label: '北京烤鸭'
				        }],
			}
		},

		methods: {
			append(data) {
				const newChild = {
					id: id++,
					label: 'testtest',
					children: []
				};
				if (!data.children) {
					this.$set(data, 'children', []);
				}
				data.children.push(newChild);
			},

			remove(node, data) {
				const parent = node.parent;
				const children = parent.data.children || parent.data;
				const index = children.findIndex(d => d.id === data.id);
				children.splice(index, 1);
			},
		}
	};
</script>

<style>
	.custom-tree-node {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		padding-right: 8px;
	}

	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		margin-right: 5px;
	}
	.select-container{
		display: flex;
		justify-content: center;
	}
</style>

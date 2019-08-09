<template>
	<div class="app-container">
		<!-- 标题 -->
		<h1 class="main-title">动画</h1>

		<!-- 文本淡入淡出 -->
		<div class="text-animation">
			<el-button size="small" @click="fadeClick">淡入淡出</el-button>
			<transition
				type="transition"
				name="fade"
				appear
				enter-active-class="animated swing fade-enter-active"
				leave-active-class="animated shake fade-leave-active"
				appear-active-class="animated swing">
				<span v-show="fade" class="text">文本淡入淡出</span>
			</transition>
		</div>

		<!-- 列表展开 -->
		<div class="list-animation">
			<el-button size="small" @click="listOpen">展开收起</el-button>
			<transition name="list-animation">
				<div v-show="is_open_list" class="list-warpper" :key="1">
					<div v-for="item in list1" :key="item.id" class="list-item">
						{{ item.name }}
					</div>
				</div>
			</transition>
		</div>
		
		<!-- 列表过渡 -->
		<div class="list-animation">
			<el-button size="small" @click="listAdd">列表过渡</el-button>
			<div class="list-warpper">
				<transition-group tag="div">
						<div v-for="item in list2" :key="item.id" class="list-item">
							{{ item.name }}
						</div>
				</transition-group>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mainTitle: false,
			contentShow: false,
			fade: false,
			is_open_list: false,
			list1: [
				{ id: 1, name: 'list 1' },
				{ id: 2, name: 'list 2' },
				{ id: 3, name: 'list 3' },
				{ id: 4, name: 'list 4' },
				{ id: 5, name: 'list 5' },
				{ id: 6, name: 'list 6' }
			],
			list2: [
				{ id: 1, name: 'list 1' },
				{ id: 2, name: 'list 2' },
				{ id: 3, name: 'list 3' }
			]
		}
	},
	mounted() {
		this.mainTitle = true
	},
	methods: {
		fadeClick() {
			this.fade = !this.fade
		},
		listOpen() {
			this.is_open_list = !this.is_open_list
		},
		listAdd() {
			const len = this.list2.length + 1
			this.list2.push({ id: len, name: `list ${len}` })
		}
	}
}
</script>

<style lang="scss" scoped>
// 标题
.main-title {
	font-size: 20px;
	text-align: center;
	padding: 20px 0;
	color: #FFF;
	background-color: #404040;
}
// 文本淡入淡出
.text-animation {
	.text {
		display: inline-block;
		font-size: 16px;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
		transform: translateX(-40px);
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.3s ease-in;
	}
}

// 列表展开收起
// 定义进入过渡的开始状态
.list-animation-enter {
	overflow: hidden;
	height: 0;
}
// 定义进入过渡生效时的状态
.list-animation-enter-active {
	overflow: hidden;
	height: 0px;
	transition: all .3s ease-in;
}
// 定义进入过渡的结束状态
.list-animation-enter-to {
	transition: all .3s ease-in;
	height: 168px;
	overflow: hidden;
}
// 定义离开过渡的开始状态
.list-animation-leave {
	height: 168px;
	overflow: hidden;
	transition: all .3s ease-in;
}
// 定义离开过渡生效时的状态
.list-animation-leave-active {
	height: 168px;
	overflow: hidden;
	transition: all .3s ease-in;
}
// 定义离开过渡的结束状态
.list-animation-leave-to {
	height: 0;
	overflow: hidden;
}
// 列表样式
.list-warpper {
	width: 200px;
	.list-item {
		padding: 5px 10px;
		border: 1px solid #eaeaea;
		color: #fff;
		background-color: #52ccba;
	}
}
.v-enter, .v-leave-to {
	opacity: 0;
}
.v-enter-active,
.v-leave-active {
	transition: opacity 1s;
}
</style>
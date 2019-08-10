<template>
	<section class="app-container">
		<div class="layout-warpper">
			<section class="user-left">
				<div class="user-warpper">
					<img class="user-avator" :src="user_avator" alt="">
					<p>{{ username }}</p>
				</div>
				<ul class="menu-warpper">
					<li class="menu-item" v-for="(item, index) in menu" :key="item.id">
						<a :class="['menu-item-title', currentIndex === index ? 'active' : '']" @click="handleMenu(index)">
							{{ item.name }}
						</a>
					</li>
				</ul>
			</section>
			<section class="user-right">
				<transition>
					<component :is="componentId"></component>
				</transition>
			</section>
		</div>
	</section>
</template>

<script>
import UserIndex from '../user/index'
import TestIndex from '../user/test'
import ExampleIndex from '../user/example'
import { images } from '../../static/images.json'
export default {
	components: { UserIndex, TestIndex, ExampleIndex },
	head: {
		title: '用户中心',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	data() {
		return {
			username: '夕阳下的湖泽',
			user_avator: images[0].user_varator,
			currentIndex: 0,
			menu: [
				{ id: 1, name: '个人中心' },
				{ id: 2, name: '我的测试' },
				{ id: 3, name: '我的示例' }
			]
		}
	},
	computed: {
		// 组件渲染
		componentId() {
			const currentIndex = this.currentIndex
			return ['user-index', 'test-index', 'example-index'][currentIndex || 0]
		}
	},
	methods: {
		// 菜单
		handleMenu(index) {
			this.currentIndex = index
		}
	}
}
</script>

<style lang="scss" scoped>
// 用户头像
.user-warpper {
	width: 100%;
	padding: 30px;
	text-align: center;
	margin-left: auto;
	.user-avator {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		margin-bottom: 30px;
		text-align: center;
	}
}
// 布局
.layout-warpper {
	width: 1200px;
	margin: 0 auto;
	display: flex;
	.user-left {
		width: 150px;
	}
	.user-right {
		width: 100%;
	}
}
// 菜单
.menu-warpper {
	width: 150px;
	.menu-item {
		border-bottom: 1px solid #eaeaea;
		&:first-child {
			border-top: 1px solid #eaeaea;
		}
		.menu-item-title {
			width: 100%;
			display: inline-block;
			height: 40px;
			line-height: 40px;
			text-align: center;
			&:hover {
				background-color: #f8f8f8;
				cursor: pointer;
			}
			&.active {
				background-color: #eaeaea;
			}
		}
	}
}
// 动画
.v-enter {
	opacity: 0;
	transform: translateX(-100px);
}
.v-enter-active {
	opacity: 0;
	transform: translateX(-50px);
	transition: all 0.1s ease-in;
}
.v-enter-to {
	opacity: 1;
	transform: translateX(0);
	transition: all 0.5s ease-in;
}
.v-leave {
	opacity: 1;
	transform: translateX(0);
	transition: all 0.5s ease-in;
}
.v-leave-active {
	opacity: 0;
	transform: translateX(-50px);
	transition: all 0.1s ease-in;
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100px);
}
</style>
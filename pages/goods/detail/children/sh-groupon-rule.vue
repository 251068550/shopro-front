<template>
	<view class="shopro-selector-rect">
		<view class="rule-box">
			<view class="item">
				<image class="img" :src="icon1" mode=""></image>
				<view>参与拼团</view>
				<view><text class="red">{{rules.team_num}}</text>人成团</view>
			</view>
			<view class="step"></view>
			<view class="item">
				<image class="img" :src="icon2" mode=""></image>
				<view><text class="red">{{rules.success_num}}</text>人拼中发货</view>
				<view><text class="red">{{rules.team_num}}</text>人未中退款</view>
			</view>
			<view class="step"></view>
			<view class="item">
				<image class="img" :src="icon3" mode=""></image>
				<view>未拼中获得奖励</view>
				<view><text class="red">￥</text><text class="red large">{{rules.award}}</text>红包</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		data() {
			return {
				icon1: '/static/imgs/groupon/pintuan1.png',
				icon2: '/static/imgs/groupon/pintuan2.png',
				icon3: '/static/imgs/groupon/pintuan3.png',
			};
		},
		props: {
			rules: {},
			value: {}
		},
		computed: {
			showModal: {
				get() {
					return this.value;
				},
				set(val) {
					this.$emit('input', val);
				}
			}
		},
		methods: {
			hideModal() {
				this.showModal = false;
			},
			onServe() {
				this.showModal = true;
			}
		}
	};
</script>

<style lang="scss">
	.rule-box {
		background: #fff;
		padding: 20rpx 0;
		margin: 20rpx 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		
		.step{
			height: 1rpx;
			background-color: #f0c785;			
			flex: .3;
		}

		.item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 24rpx;
			
			.img{
				width: 40rpx;
				height: 40rpx;
				margin-bottom: 10rpx;
			}
			.red{
				color: red;
			}
			.large{
				font-weight: bold;
				font-size: 28rpx;
			}
		}
	}

	.serve-box {
		line-height: 82rpx;
		background: #fff;
		padding: 0 20rpx;
		margin: 20rpx 0;

		.title {
			font-size: 28rpx;
			color: #999;
			margin-right: 20rpx;
		}

		.tip {
			.tip-list {
				font-size: 28rpx;
				margin-right: 20rpx;

				.tip-img {
					width: 30rpx;
					height: 30rpx;
					margin-right: 10rpx;
				}
			}
		}

		.cuIcon-right {
			color: #bfbfbf;
			font-size: 36rpx;
		}
	}
</style>

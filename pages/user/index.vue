<template>
  <div class="app-container">
    <h2 class="user-title">个人中心</h2>
    <div class="class-type">
      <dl class="type-item" v-for="item in list" :key="item.id">
        <dd class="type-image">
          <img :src="user_varator" alt="" class="img">
        </dd>
        <dd class="type-title">{{ item.name }}</dd>
      </dl>
    </div>
    <div class="plane-warpper">
      <div class="plane-title">
        个人信息
        <span class="icon-warpper">编辑</span>
      </div>
      <div class="plane-table-warpper">
        <table class="plane-table">
          <tr class="plane-item" v-for="item in table" :key="item.id">
            <td class="plane-item-cell">{{ item.key }}：</td>
            <td class="plane-item-cell">{{ item.value }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="plane-warpper">
      <div class="plane-title">
        账户余额
        <span class="icon-warpper">充值</span>
      </div>
      <div class="plane-table-warpper">
        <table class="plane-table">
          <tr class="plane-item" v-for="item in money" :key="item.id">
            <td class="plane-item-cell">{{ item.key }}：</td>
            <td class="plane-item-cell">{{ item.value }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="plane-warpper">
      <div class="plane-title">
        安全中心
        <span class="icon-warpper">修改</span>
      </div>
      <div class="plane-table-warpper">
        <table class="plane-table">
          <tr class="plane-item" v-for="item in safe" :key="item.id">
            <td class="plane-item-cell">{{ item.key }}：</td>
            <td class="plane-item-cell">{{ item.value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { images } from '../../static/images'
export default {
  data() {
    return {
      list: [
        { id: 1, url: '', name: '标题文本' },
        { id: 2, url: '', name: '标题文本' },
        { id: 3, url: '', name: '标题文本' },
        { id: 4, url: '', name: '标题文本' }
      ],
      table: [
        { id: 1, key: '真实姓名', value: '赵子龙' },
        { id: 2, key: '年龄', value: 27 },
        { id: 3, key: '性别', value: '男' },
        { id: 4, key: '手机号', value: '1320000000' },
        { id: 5, key: '地址', value: '江苏省南京市江宁区江苏软件园' },
        { id: 6, key: '爱好', value: '羽毛球' },
        { id: 7, key: '特长', value: '书法' }
      ],
      money: [
        { id: 1, key: '余额', value: 999999999.99 },
        { id: 3, key: '支出', value: 0.00 },
        { id: 2, key: '总资产', value: 999999999.99 }
      ],
      safe: [
        { id: 1, key: '手机号', value: 13200000000 },
        { id: 2, key: '绑定邮箱', value: '13200000000@qq.com' }
      ],
      user_varator: images[0].user_varator
    }
  }
}
</script>

<style lang="scss" scoped>
.user-title {
  padding: 12px 0;
  border-bottom: 1px solid #eaeaea;
}
.class-type {
  margin: 20px 0;
  display: flex;
  align-items: center;
  .type-item {
    width: 100%;
    padding: 16px;
    text-align: center;
    cursor: pointer;
    transition-duration: 0.3s;
    &:hover {
      border-radius: 4px;
      background-color: #f8f8f8;
      box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    }
    .type-image {
      margin-bottom: 16px;
      .img {
        width: 120px;
        height: 120px;
        background-color: #f8f8f8;
      }
    }
  }
}
.plane-warpper {
  border: 1px solid #eaeaea;
  margin-bottom: 20px;
  .plane-title {
    padding: 0 16px;
    height: 40px;
    line-height: 40px;
    background-color: #eaeaea;
    .icon-warpper {
      width: 80px;
      font-size: 12px;
      text-align: center;
      float: right;
      cursor: pointer;
    }
  }
  .plane-table-warpper {
    padding: 0 20px;
    .plane-table {
      width: 100%;
      .plane-item {
        border-bottom: 1px solid #eaeaea;
        &:last-child {
          border-bottom-width: 0;
        }
      }
      .plane-item-cell {
        height: 40px;
        line-height: 40px;
        &:first-child {
          width: 20%;
        }
      }
    }
  }
}
</style>

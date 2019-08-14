<template>
  <div class="app-container">
    <div class="tabs-warpper">
      <section class="tabs-left">
        <ul class="tabs-title-warpper">
          <li
            class="tabs-title"
            v-for="(item, index) in tabs"
            :key="index"
            :class="[index === currentIndex ? 'tabs-title-active' : '', className ]"
            @click="tabsHandle(index)">
            {{ item }}
          </li>
        </ul>
      </section>
      <section class="tabs-right">
        <div ref="content" class="tabs-content-warpper">
          <div class="tabs-content">
            <slot></slot>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ITabs',
  props: {
    tabs: {
      type: Array,
      default: function() {
        return []
      }
    },
    className: String,
    width: {
      type: [String, Number],
      default: '100px'
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {},
  methods: {
    tabsHandle(index) {
      this.currentIndex = index
      this.$emit('on-click', index)
      this.$refs.content.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding: 15px;
}
.tabs-warpper {
  display: flex;
  border: 1px solid #eaeaea;
  .tabs-left {
    width: 100px;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    overflow: hidden;
    .tabs-title-warpper {
      height: 200px;
      overflow-x: hidden;
      width: calc(100% + 17px);
      font-size: 16px;
      overflow-y: auto;
      border-right: 1px solid #eaeaea;
      .tabs-title {
        text-align: center;
        padding: 10px 10px;
        &:hover {
          background-color: #f8f8f8;
          cursor: pointer;
        }
        &.tabs-title-active {
          color: #FFF;
          background-color: #52ccba;
        }
      }
    }
  }
  .tabs-right {
    width: calc(100% - 101px);
    height: 200px;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    overflow: hidden;
    .tabs-content-warpper {
      width: calc(100% + 17px);
      height: 200px;
      padding: 20px;
      overflow-x: hidden;
      overflow-y: auto;
      transition: all 1s ease-in;
      .tabs-content {
        font-size: 14px;
        .user-name {
          width: 100px;
          padding: 5px 10px;
          margin-bottom: 15px;
          margin-right: 15px;
          display: inline-block;
          display: block;
          text-align: center;
          color: #404040;
          border: 1px solid #eaeeae;
          &:hover {
            color: #fff;
            background-color: #52ccba;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
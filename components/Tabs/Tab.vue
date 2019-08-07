<template>
  <div class="tab-warpper">
    <div class="tab-title">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Tab'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
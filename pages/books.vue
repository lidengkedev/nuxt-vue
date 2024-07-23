<template>
  <NuxtLayout>
    <h1>通过关键字查询图书</h1>
    <div class="search-inner">
      <input type="text" v-model="keyword" placeholder="请输入关键字" />
      <button @click="getBooks">查询</button>
    </div>
    <article>
      <span v-for="(tip, index) in tipList" :key="index" class="tip" @click="handleTip(tip)">{{ tip }}</span>
    </article>
    <section>
      <ul class="book_list">
        <li v-for="(book, index) in bookList" :key="index">
          <img :src="book.cover" alt="" />
          <p>《{{ book.title }}》</p>
          <p>{{ book.author }}</p>
          <p class="intro">{{ book.intro }}</p>
          <p class="publisher">{{ book.publisher }}</p>
          <p>单价：￥{{ book.price }}</p>
        </li>
      </ul>
      <div class="loading" v-show="loading">加载中...</div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface IBookItem {
  /** 图书书名 */
  title?: string
  /** 图书封面 */
  cover?: string
  /** 作者 */
  author?: string
  /** 简介 */
  intro?: string
  /** 出版社 */
  publisher?: string
  /** 价格 */
  price?: number
}

useHead({
  title: '通过关键字查询图书',
  meta: [
    { name: 'keywords', content: 'vue, 图书, 关键字' }
  ],
  bodyAttrs: {
    class: 'book'
  },
  script: [
    // { src: '' },
    { innerHTML: 'console.log(\'Hello world\')' }
  ]
})

const bookList = ref([])
const keyword = ref('刘慈欣')
const tipList = ref(['刘慈欣', '陈行甲', '余华', '钱钟书'])
const loading = ref(false)

const getBooks = async () => {
  loading.value = true
  const response = await fetch('/api/books?keyword=' + keyword.value)
  const data = await response.json()
  bookList.value = data.data.map((item: IBookItem) => {
    return {...item, price: typeof item.price === 'number' ? item.price.toFixed(2) : '-' }
  })
  loading.value = false
}
const handleTip = (tip: string) => {
  keyword.value = tip
}

</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 30px;
}
.search-inner {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-sizing: border-box;
}
.search-inner input {
  padding-left: 12px;
  width: calc(100% - 120px);
  height: 48px;
  font-size: 20px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #DDDDDD;
}
.search-inner button {
  width: 120px;
  height: 48px;
  font-size: 20px;
  border-color: transparent;
  color: #FFF;
  background-color: #52ccba;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
}
article {
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 16px;
  color: #999;
  box-sizing: border-box;
}
article .tip {
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #52ccba;
  color: #FFF;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
section {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}
.book_list {
  padding: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  border: 1px solid #DDDDDD;
  height: calc(100vh - 280px);
  overflow-y: auto;
}
.book_list li {
  list-style: none;
}
.book_list li img {
  width: 214px;
  height: 306px;
}
.book_list li .intro {
  height: 103px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.book_list li .publisher {
  min-height: 20px;
}
section .loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #FFF;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>

export default defineEventHandler(async event => {
  const { keyword } = getQuery(event)
  const data = await fetch(`https://book-db-v1.saltyleo.com/?keyword=${keyword}`).then(res => res.json())
  return {
    code: 200,
    data: data,
    message:'success'
  }
})

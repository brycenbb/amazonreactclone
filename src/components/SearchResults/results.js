/**
 * 
  let product: {
    product_id: number
    alsoBought: [{other product id,number of times bought together}]
    title: string
    price: number
    categories: [string]
    pictures: [url string]
    rating: number
    information: string
  }

  purpose of alsoBought is so that 'also bought together' 
  can be shown for when items are bought more than once together


  There are more properties of amazon items but I feel like this is enough for now.
 * 
 * 
 * 
 */

//This api can be used to find the similarity between the search term and
//the title + categories of each item, returning if the similarity is high enough

//https://dandelion.eu/semantic-text/text-similarity-demo/?text1=work+out&text2=working+out&lang=auto&exec=true
let products = [
  {
    product_id: 1,
    alsoBought: [
      { product_id: 2, count: 2 },
      { product_id: 3, count: 3 },
      { product_id: 4, count: 1 },
      { product_id: 5, count: 1 },
      { product_id: 6, count: 2 },
    ],
    title: 'Bunch of Apples',
    categories: ['food', 'fruit', 'edible', 'perishable', 'red', 'sweet'],
    price: 1000.01,
    pictures: [
      'https://images.unsplash.com/photo-1613061527119-56ad37b8a581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
      'https://images.unsplash.com/photo-1583260142313-2c9c2c5fec8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    ],
    rating: 4,
    information: 'This is a bundle of apples weighing 100kg',
  },
  {
    product_id: 2,
    alsoBought: [{ product_id: 4, count: 2 }],
    title: 'Exercise band',
    categories: ['exercise', 'workout', 'band', 'stretch'],
    price: 20,
    pictures: [
      'https://images.unsplash.com/photo-1515775538093-d2d95c5ee4f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    ],
    rating: 3.5,
    information: 'This is a single exercise band',
  },
  {
    product_id: 3,
    alsoBought: [{ product_id: 6, count: 2 }],
    title: 'iPhone 12',
    price: 1200,
    categories: ['tech', 'computer', 'phone', 'mobile', 'camera'],
    pictures: [
      'https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80',
    ],
    rating: 4.5,
    information:
      'This is a really expensive phone and I do not know if the version is correct either',
  },
  {
    product_id: 4,
    alsoBought: [{ product_id: 2, count: 6 }],
    title: 'Hiking boots',
    categories: ['exercise', 'workout', 'hiking', 'shoes', 'adventure'],
    price: 60,
    pictures: [
      'https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1606&q=80',
    ],
    rating: 4,
    information: 'This may or may not be a single shoe',
  },
  {
    product_id: 5,
    alsoBought: [],
    title: 'Candle',
    categories: ['smell', 'fire', 'gentle', 'relaxing', 'scent'],
    price: 2,
    pictures: [
      'https://images.unsplash.com/photo-1601922046210-41e129a3e64a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FuZGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    ],
    rating: 2.5,
    information: 'Because who doesnt like a candle',
  },
  {
    product_id: 6,
    alsoBought: [{ product_id: 5, count: 10 }],
    title: 'Gaming desktop',
    categories: ['computer', 'gaming', 'technology', 'PC'],
    price: 2500.55,
    pictures: [
      'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
    ],
    rating: 5,
    information: 'Game away',
  },
];

export default products;

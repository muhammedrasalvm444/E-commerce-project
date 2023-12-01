export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of Product'
      },
      {
        name: 'image',
        type: 'array',
        title: 'Product Image',
        of: [{ type: 'image' }]
      },
      {
        name: 'description',
        type: 'text',
        title: 'Product description'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Product slug',
        options:{
            source:"name"
        }
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'price_id',
        type: 'string',
        title: 'Stripe Price ID'
      },
      {
        name: 'category',
        type: 'reference',
        title: 'Category',
        to:[
            {
                type:'category'
            }
        ]
      }
    ]
  }
  
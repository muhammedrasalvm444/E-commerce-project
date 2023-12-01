export default {
    name: "category",
    type: "document",
    title: "Categories",
    fields:[{
        name:"name",
        title:"Name of Category",
        type:"string"
    },{
        name: 'slug',
        type: 'slug',
        title: 'Category slug',
        options:{
            source:"name"
        }
      },]
}
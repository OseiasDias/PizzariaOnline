
export default{

    name: 'pizza',
    title: 'pizza',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
                hostpost: true
            }
        },

        {
            name: 'image',
            title: 'image',
            type: 'sring'
            
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'image',
                maxLength:90
            }
        }
        , {
            name: 'prince',
            title: 'prince',
            type: 'array',
            of: [{type:'number'}]
            
        },
        {
            name: 'details',
            title: 'details',
            type: 'sring'
            
        }
    ]
}
const department = {
    name: 'Engineering',
    data: {
        director: {
            name:'John',
            position: 'Director of eng'
        },
        employees: [],
        company: 'Quick build'
    }
}
const {data: {director}} = department //director e promenlivata
console.log(director)
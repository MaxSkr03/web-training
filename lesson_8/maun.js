Vue.component('block-table', {
    props: ['title'],
    template: "<table border='1'><block-tr :title='title'></block-tr></table>"
})
Vue.component('block-tr', {
    props: ['title'],
    template: `<tr>
                <td>{{ title }}</td>
                <td>sdfsdf</td>
            </tr>`
})
Vue.component('block-div', {
    props: ['title'],
    template: '<div>{{ title }}</div>'
})
var app = new Vue({
    el: '#app',
    data: {
        task: new TasksReposit(window.localStorage),
        notes: [],
        title: '',
        content: ''
    },
    methods: {
        SetElement: function() {
            this.task.Add(new Note(this.content, this.title));
            this.UpdateData()
        },
        UpdateData: function() {
            this.notes = this.task.Get()
        }
    },
    mounted() {
        this.UpdateData()
    }
})
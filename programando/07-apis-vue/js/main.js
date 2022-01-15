const app = Vue.createApp({
    
    data() {
        return {
            title: 'Peticiones  fetch'
        }
    },
    created() {
        console.log('hola');
        this.getPost();
    },
    methods: {
      async getPost(){
           const res = await fetch("https://jsonplaceholder.typicode.com/photos");
           console.log(res);


        }
    }
})
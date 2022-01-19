const app = Vue.createApp({
    data() {
        return{
            title: "Movie Vue",
            movieData: {},
            movieTitle: "Spider Man",
        }
    },
    mounted() {
        this.getMovie();
    },
    methods: {
       async getMovie(){
           const search = this.movieTitle.toLowerCase().replace(/ /g, "+"); /*renplazar espacios en blanco con+*/
           /* llamando la api con fetch */
          const data = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=24776d32&t=${search}`);
          
          /* pasando el resultado a json */
          const jsonData = await data.json();
          /* asignando el resultado a un  objecto */
          this.movieData = jsonData;
        }
    }
});
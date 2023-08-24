const { createApp } = Vue

createApp({
    data() {
        return {
            vinylLists: [],
            songTitle: '',
            searchBar: false
        }
    },
    methods: {
        searchInAPI(){
            axios.get('http://localhost/php-dischi-json/api.php', {
                params: {
                }
            })
            .then(res => {
                this.vinylLists = res.data;
            });
        },
    },
    created(){
        this.searchInAPI();
    }
}).mount('#app')
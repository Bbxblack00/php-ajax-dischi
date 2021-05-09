function init() {
    new Vue({
        el: "#app",
        data: {
            'hello': 'Hello World',
            disks: [],
            // dskPoster: '',
            // dskTitle: '',
            // dskGenre: '',
            // dskAuthor: '',
            // dskYear: ''
        },
        mounted() {
            axios.get('data.php')
                .then(r => {
                    console.log(r.data);
                    this.disk = r.data


                })
                .catch(e => {
                    console.log(e);
                })
        }
    });
}
document.addEventListener("DOMContentLoaded",init);

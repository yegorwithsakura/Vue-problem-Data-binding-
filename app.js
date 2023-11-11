const app=Vue.createApp({
    data() {
        return {
            name:'Yegor',
            age:19,
            imgLink:'Unknown.png'
        }
    },
    methods: {
        favNum(){
            const randomNumber = Math.random();
            return randomNumber;
        }
    },
});

app.mount('#assignment')

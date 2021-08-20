// 定义根组件
const root = {
    // 组件中的data属性
    data() {
        return {
            name: "Allen",
            age: 10
        }
    },

    // 组件中自定义的函数
    methods: {
        add() {
            this.age++;
        },
        sub() {
            this.age--;
        }
    },
    props() {

    },
    computed() {

    },
    inject() {

    },
    setup() {

    },

    // created钩子(类似于onCreate回调函数)
    created() {

    },

    // mounted钩子
    mounted() {

    },

    // updated钩子
    updated() {

    },

    // unmounted钩子
    unmounted() {

    },

    // mounted钩子
    mounted() {

    },
};

// 创建应用实例
const app = Vue.createApp( root ).mount("app");
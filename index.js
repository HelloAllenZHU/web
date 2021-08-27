// 定义根组件
const root = {
    // 组件中的data属性
    data() {
        return {
            name: "Allen",
            age: 10
        }
    },

    // 定义局部组件
    components: {
        //"component-a" :ComponentA,
        //"component-a" :ComponentB
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

    // 使用组件时，需要传递给组件的参数(自定义组件的属性)
    props: ['title', 'msg'],

    // 计算属性
    computed() {

    },

    // 侦听器
    watch: {

    },

    // 
    inject() {

    },

    // 
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
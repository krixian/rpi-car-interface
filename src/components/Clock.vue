<template>
    <time v-if="this.ready">
        {{hour}}:{{minute}}
    </time>
</template>

<script>
export default {
    data: () => ({
        hour: null,
        interval: null,
        minute: null,
        ready: false
    }),

    mounted() {
        this.updateClock();
        this.interval = setInterval(this.updateClock, 1000);
    },

    beforeDestroy() {
        if (this.interval !== null) {
            clearInterval(this.interval);
        }
    },

    methods: {
        updateClock() {
            const time = new Date();
            this.hour = `00${time.getHours()}`.slice(-2);
            this.minute = `00${time.getMinutes()}`.slice(-2);
            this.ready = true;
        },
    }
}
</script>
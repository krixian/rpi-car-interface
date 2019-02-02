<template>
    <div @click="resetTimeOut">
        <transition name="drop">
            <screensaver v-if="showScreensaver"></screensaver>
        </transition>
        <router-view v-if="!showScreensaver"></router-view>
    </div>
</template>

<script>
import Screensaver from "./components/Screensaver.vue";

export default {
    data: () => ({
        screensaverTimeout: null,
        showScreensaver: true,
        showScreensaverAfter: 3000
    }),

    components: {
        Screensaver
    },

    methods: {
        resetTimeOut() {
            this.showScreensaver = false;

            if (this.screensaverTimeout !== null) {
                clearTimeout(this.screensaverTimeout);
            }

            this.screensaverTimeout = setTimeout(() => this.showScreensaver = true, 4000);
        },
    }
}
</script>

<style lang="less">
*, *:before, *:after {
    color: inherit;
    font: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
}

html {
    font-size: unit(35 / 16 * 100, %);
}

body {
    .text--normal();
    background: @tone-black linear-gradient(100deg, transparent 61.8%, @color-purple-secondary 61.8%) no-repeat;
    color: @text-color;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    line-height: 1.6;
    margin: 0;
    min-height: 100vh;
}
</style>
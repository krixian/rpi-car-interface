<template>
    <screensaver :timeout="2000">
        <template slot="screensaver">
            <clock class="clock"></clock>
        </template>

        <h1>Content</h1>
    </screensaver>
</template>

<script>
import Clock from "./components/Clock.vue";
import Screensaver from "./components/Screensaver.vue";

export default {
    components: {
        Clock,
        Screensaver
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
    background: @tone-black linear-gradient(100deg, transparent 61.8%, @color-purple-secondary 61.8%) no-repeat top left;
    color: @text-color;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    line-height: 1.6;
    margin: 0;
    min-height: 100vh;
}
</style>
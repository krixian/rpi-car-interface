<template>
    <screensaver class="screensaver" :timeout="0">
        <template slot="screensaver">
            <clock class="clock"></clock>
        </template>

        <DistanceSensor class="distance-sensor">
        </DistanceSensor>
    </screensaver>
</template>

<script>
import Clock from "./components/Clock.vue";
import DistanceSensor from "./components/DistanceSensor.vue";
import Screensaver from "./components/Screensaver.vue";

export default {
    components: {
        Clock,
        DistanceSensor,
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
    font-size: unit(35 / 16 * 100, e("%"));
}

body {
    background: @tone-black linear-gradient(100deg, transparent 61.8%, @color-purple-secondary 61.8%) no-repeat top left;
    color: @text-color-light;
    font: 700 @font-size-normal e("/") 1.6 'PT Sans', sans-serif;
    margin: 0;
    overflow: hidden;
}

.screensaver {
    align-items: center;
    display: flex;
    height: 100vh;
    overflow: auto;
}

.clock {
    color: @color-orange;
    font-size: 30vh;
    line-height: 1;
    margin: 0 @base-grid;
}

.distance-sensor {
    display: block;
    height: 100%;
    width: 100%;
}
</style>
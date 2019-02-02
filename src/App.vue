<template>
    <div>
        <router-view></router-view>
    </div>
</template>

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
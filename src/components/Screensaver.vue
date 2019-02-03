<template>
    <div @click="resetTimeOut" @mousemove="resetTimeOut">
        <slot name="screensaver" v-if="showScreensaver"></slot>
        <slot v-if="!showScreensaver"></slot>
    </div>
</template>

<script>
export default {
    data: () => ({
        screensaverTimeout: null,
        showScreensaver: true
    }),

    props: {
        timeout: { default: 10000, type: Number }
    },

    methods: {
        resetTimeOut() {
            this.showScreensaver = false;

            if (this.screensaverTimeout !== null) {
                clearTimeout(this.screensaverTimeout);
            }

            this.screensaverTimeout = setTimeout(() => this.showScreensaver = true, this.timeout);
        },
    }
}
</script>
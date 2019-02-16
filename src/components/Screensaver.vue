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

    mounted() {
        if (this.timeout <= 0) {
            this.hide();
        }
    },

    methods: {
        hide() {
            this.showScreensaver = false;
            this.$emit("hide");
        },

        resetTimeOut() {
            this.hide();

            if (this.screensaverTimeout !== null) {
                clearTimeout(this.screensaverTimeout);
            }

            if (this.timeout > 0) {
                this.screensaverTimeout = setTimeout(() => this.show(), this.timeout);
            }
        },

        show() {
            this.showScreensaver = true;
            this.$emit("show");
        },
    }
}
</script>
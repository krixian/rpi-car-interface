<template>
    <g viewbox="0 0 100 100">
        <defs>
            <clipPath :id="'wave-effect-' + _uid">
                <path :d="'M0 0l' + length + ' ' + baseLength / 2 + 'l0 -' + baseLength + 'Z'" />
            </clipPath>
        </defs>

        <g :clip-path="'url(#wave-effect-' + _uid + ')'">
            <circle r="0" v-for="n in 6" :key="n">
                <animate attributeName="r" :to="length" dur="3s" repeatCount="indefinite" :begin="500 * (n - 1) + 'ms'" />
            </circle>
        </g>
    </g>
</template>

<script>
export default {
    computed: {
        baseLength() {
            const a = this.length / Math.cos(this.radians(this.angle) / 2);
            const b = this.radians((180 - this.angle) / 2);
            return a * 2 * Math.cos(b);
        }
    },
    methods: {
        radians(degrees) { return degrees * (Math.PI / 180) },
    },
    props: {
        angle: { type: Number, default: 60 },
        length: { type: Number, default: 100 },
        waves: { type: Number, default: 6 },
    }
}
</script>

<style lang="less">
circle {
    fill: none;
}
</style>


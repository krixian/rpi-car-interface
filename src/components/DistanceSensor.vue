<template>
    <svg :viewBox="viewbox">
        <wave-effect v-for="s in sensorLines" stroke-width="20" :stroke="s.color" :key="s.i" :length="s.distance" :transform="'translate(' + s.offset + ',' + 0 + ') rotate(' + (90 + s.angle) + ')'">
        </wave-effect>

        <image
            :height="carLength"
            :width="carWidth"
            :x="carWidth / -2"
            :y="-carLength + carOffset"
            preserveAspectRatio="xMidYMax"
            transform="scale(1.2) translate(0, 0)"
            xlink:href="../assets/car-images/peugeot-107-top.png" />
    </svg>
</template>

<script>
import WaveEffect from "./WaveEffect.vue"

export default {
    components: { 
        WaveEffect 
    },
    computed: {
        viewbox() {
            const zoomFactor = .6;
            const width = this.carWidth * (1 + zoomFactor);

            return [
                width / -2,
                this.height * -zoomFactor,
                width,
                this.height * (1 + zoomFactor * 2)
            ].join(" ");
        },

        sensorLines() {
            return this.sensors.map((s, i) => ({
                ...s, i,
                x2: s.distance * this.mappedCos(s.angle) + s.offset,
                y2: s.distance * this.mappedSin(s.angle),
                color: this.colorFromDistance(s.distance)
            }))
        },

        height() {
            return this.sensorLines.reduce((a, v) => Math.max(a, v.y2), 0);
        },
    },
    methods: {
        radian(degrees) { return degrees * (Math.PI / 180) },
        mappedCos(angle) { return Math.cos(this.radian(angle + 90)) },
        mappedSin(angle) { return Math.sin(this.radian(angle + 90)) },
        colorFromDistance(distance) {
            if (distance < 300) return "#f00";
            if (distance < 600) return "#ff0";
            if (distance < 900) return "#0f0";
            return "#999";
        }
    },
    mounted() {
        const interval = setInterval(() => {
            if (this.sensors.some(s => s.distance > 280)) {
                this.sensors.forEach(s => s.distance = s.distance - 20);
            } else {
                clearInterval(interval);
            }
        }, 200)
    },
    data() {
        return {
            carLength: 3430,
            carWidth: 1855,
            carOffset: 150,
            sensors: [
                { offset: -700, angle: 10, distance: 1200 },
                { offset: -300, angle: 0, distance: 1200 },
                { offset: 300, angle: -0, distance: 1200 },
                { offset: 700, angle: -10, distance: 1200 }
            ],

        }; 
    }
}
</script>

<style lang="less">
    body {
        background: #334 !important;
    }
</style>
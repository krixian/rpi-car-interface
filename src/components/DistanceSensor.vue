<template>
    <svg :viewBox="viewbox">
        <line v-for="s in sensorLines" :key="s.i"
            :stroke="s.color"
            :x1="s.offset"
            :y1="0"
            :x2="s.x2"
            :y2="s.y2" />

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
export default {
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
    data() {
        return {
            carLength: 3430,
            carWidth: 1855,
            carOffset: 150,
            sensors: [
                { offset: -700, angle: 10, distance: 1000 },
                { offset: -300, angle: 5, distance: 800 },
                { offset: 300, angle: -5, distance: 400 },
                { offset: 700, angle: -10, distance: 200 }
            ],

        }; 
    }
}
</script>

<style lang="less">
    body {
        background: #334 !important;
    }

    line {
        animation: strokes 400ms linear infinite;
        stroke-width: 300px;
        stroke-dasharray: 20 40;
    }

    @keyframes strokes {
        to { stroke-dashoffset: -60; }
    }
</style>
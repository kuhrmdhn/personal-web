<script setup lang="ts">
import { ref, onMounted } from 'vue';

const displayText = ref("")
const props = defineProps({
    target: {
        required: true,
        type: String
    },
    frames: {
        default: 60,
        type: Number
    }
})

const { target, frames } = props
const totalFrame = frames
let frame = 0
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let result = [...Array(target.length)].fill("")

function randomText() {
    frame++

    const targetLength = target.length
    const alphabetLength = alphabet.length

    result = result.map((_, i) => {
        if (frame < totalFrame * (i + 1) / targetLength) {
            const randomIndex = Math.floor(Math.random() * alphabetLength)
            return result[i] = alphabet[randomIndex]
        }
        return result[i] = target[i]
    })

    displayText.value = result.join("")

    if (frame < totalFrame) {
        requestAnimationFrame(randomText)
    }
}
onMounted(() => randomText())
</script>


<template>
    <div>
        <h1>{{ displayText }}</h1>
    </div>
</template>
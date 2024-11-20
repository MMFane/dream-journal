<script setup lang="ts">
    import dreams from "../data/data.json"
    import BarChart from "./charts/BarChart.vue";
    import { TagCount } from "./types/types";

    const normalizeTag = (tag: string): string => {
        return tag.toLowerCase().trim()
    }

    const tagCounts: {[tagName: string]: number;} = {}
    dreams.forEach(dream => {
        const tags = dream.tags
        const tagsArray = tags?.split(", ")
        tagsArray?.forEach(tag => {
            const normalizedtag = normalizeTag(tag)
            if (!Object.keys(tagCounts).includes(normalizedtag)) {
                tagCounts[normalizedtag] = 1
            } else {
                const oldCount = tagCounts[normalizedtag]
                tagCounts[normalizedtag] = oldCount + 1
            }
        })
    })

    // can we do this more efficiently, or in one go through the array?
    const tagCountsArray: Array<TagCount> = []
    for (let tag in tagCounts) {
        tagCountsArray.push({name: tag, value: tagCounts[tag]})
    }
    console.log(tagCountsArray)

</script>

<template>
    <h2>Dreams Tag Chart</h2>
    <BarChart :data="tagCountsArray"/>
</template>
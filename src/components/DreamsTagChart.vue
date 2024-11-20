<script setup lang="ts">
    import dreams from "../data/data.json"

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
    console.log("tagCounts", tagCounts)
</script>

<template>
    <h2>Dreams Tag Chart</h2>
</template>
<template>
    <div ref="chartContainer"></div>
  </template>
  
  <script lang="ts">
    import { defineComponent, onMounted, ref } from "vue";
    import * as d3 from "d3";
    import { TagCount } from "../types/types";
  
    export default defineComponent({
        name: "BarChart",
        setup() {
            const chartContainer = ref<HTMLElement | null>(null);
            const data = ref<TagCount[]>([
                { name: "A", value: 1 },
                { name: "B", value: 2 },
                { name: "C", value: 3 },
            ]);

            // todo pass real data in with props
            
            onMounted(() => {
                if (chartContainer.value) {
                renderChart(chartContainer.value, data.value);
                }
            });
        
            const renderChart = (container: HTMLElement, data: TagCount[]) => {
                const margin = { top: 20, right: 20, bottom: 30, left: 40 };
                const width = 400 - margin.left - margin.right;
                const height = 400 - margin.top - margin.bottom;
        
                const svg = d3
                .select(container)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);
        
                const x = d3
                .scaleBand()
                .range([0, width])
                .domain(data.map((d) => d.name))
                .padding(0.1);
        
                const y = d3
                .scaleLinear()
                .range([height, 0])
                .domain([0, d3.max(data, (d: TagCount) => d.value) || 0]);
        
                svg
                .append("g")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(x));
        
                svg.append("g").call(d3.axisLeft(y));
        
                svg
                .selectAll(".bar")
                .data(data)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", (d: TagCount) => x(d.name) || 0)
                .attr("y", (d: TagCount) => y(d.value))
                .attr("width", x.bandwidth())
                .attr("height", (d: TagCount) => Math.abs(height - y(d.value)));
            };
        
            return {
                chartContainer,
                data,
            };
        },
    });
  </script>
  
  <style scoped>
  .bar {
    fill: steelblue;
  }
  </style>
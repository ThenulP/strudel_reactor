import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

export default function Waveform({ waveform }) {
    const containerRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !svgRef.current || !waveform) return;

        const container = containerRef.current;
        const svg = d3.select(svgRef.current);

        const resize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;

            svg.attr("width", width).attr("height", height);

            const x = d3.scaleLinear().domain([0, waveform.length]).range([0, width]);
            const y = d3.scaleLinear().domain([0, 255]).range([height, 0]);

            const line = d3
                .line()
                .x((_, i) => x(i))
                .y((d) => y(d))
                .curve(d3.curveBasis);

            svg
                .selectAll("path")
                .data([waveform])
                .join("path")
                .attr("d", line)
                .attr("fill", "none")
                .attr("stroke", "#00e5ff")
                .attr("stroke-width", 2);
        };

        resize();

        const observer = new ResizeObserver(resize);
        observer.observe(container);

        return () => observer.disconnect();
    }, [waveform]);

    return (
        <div
            ref={containerRef}
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
        >
            <svg ref={svgRef}></svg>
        </div>
    );
}
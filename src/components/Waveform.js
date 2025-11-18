import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

export default function Waveform({ data }) {
    const wrapperRef = useRef();
    const svgRef = useRef();
    const [size, setSize] = useState({ width: 300, height: 150 });

    useEffect(() => {
        if (!wrapperRef.current) return;

        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                setSize({ width, height });
            }
        });

        observer.observe(wrapperRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!data || !svgRef.current) return;

        const { width, height } = size;
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const x = d3.scaleLinear()
            .domain([0, data.length])
            .range([0, width]);

        const y = d3.scaleLinear()
            .domain([-1, 1])
            .range([height, 0]);

        const line = d3.line()
            .x((d, i) => x(i))
            .y(d => y(d))
            .curve(d3.curveBasis);

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#1f77b4")
            .attr("stroke-width", 1)
            .attr("d", line);

    }, [data, size]);

    return (
        <div ref={wrapperRef} style={{ width: "100%", height: "100%" }}>
            <svg ref={svgRef} width={size.width} height={size.height} />
        </div>
    );
}
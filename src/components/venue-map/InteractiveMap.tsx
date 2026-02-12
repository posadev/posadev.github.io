import React, {useRef, useEffect, useState} from "react";
import {graph, shapeMap, shapes} from "@/components/venue-map/MapElements.ts";
import VenueMap from "@/components/venue-map/VenueMap.tsx";
import {bfsShortestPath} from "@/components/venue-map/BfsShortestPath.ts";


function getShapeCenter(shape, width, height) {
    if (shape.radius) {
        return {
            x: shape.x * width,
            y: shape.y * height
        };
    }

    return {
        x: shape.x * width + (shape.width * width) / 2,
        y: shape.y * height + (shape.height * height) / 2
    };
}

function drawPath(ctx, path, width, height) {
    if (!path || path.length < 2) return;

    ctx.strokeStyle = "yellow";
    ctx.lineWidth = width * 0.01;
    ctx.beginPath();

    let first = shapeMap[path[0]];
    let c = getShapeCenter(first, width, height);
    ctx.moveTo(c.x, c.y);

    for (let i = 1; i < path.length; i++) {
        const shape = shapeMap[path[i]];
        const pos = getShapeCenter(shape, width, height);
        ctx.lineTo(pos.x, pos.y);
    }

    ctx.stroke();
}


function drawShapes(ctx, shapes, width, height) {
    shapes.forEach(shape => {
        ctx.fillStyle = shape.color;
        ctx.strokeStyle = shape.color;

        switch (shape.type) {
            case "assistant":
                ctx.beginPath();
                ctx.arc(
                    shape.x * width,
                    shape.y * height,
                    shape.radius * width,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
                break;

            case "path":
                ctx.lineWidth = shape.thickness * width;
                ctx.beginPath();
                ctx.moveTo(shape.x1 * width, shape.y1 * height);
                ctx.lineTo(shape.x2 * width, shape.y2 * height);
                ctx.stroke();
                break;

            default:
                ctx.fillRect(
                    shape.x * width,
                    shape.y * height,
                    shape.width * width,
                    shape.height * height
                );
                ctx.fillStyle = "white";
                const textX = shape.x * width + (shape.width * width)/2 - ctx.measureText(shape.label).width/2;
                const textY = shape.y * height + (shape.height * height)/2 - (width * 0.01);
                ctx.fillText(shape.label, textX, textY);
                break;
        }
    });
}

const InteractiveMap = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    const [startNode, setStartNode] = useState(null);
    const [endNode, setEndNode] = useState(null);

    const [hovered, setHovered] = useState(null);

    /** Detectar shape bajo el mouse usando coordenadas escaladas */
    function getShapeAt(x, y, width, height) {
        return shapes.find(shape => {
            const sx = shape.x * width;
            const sy = shape.y * height;
            const sw = shape.width * width;
            const sh = shape.height * height;

            return x >= sx && x <= sx + sw && y >= sy && y <= sy + sh;
        });
    }

    function handleMouseMove(e) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const width = rect.width;
        const height = rect.height;

        const shape = getShapeAt(x, y, width, height);

        if (shape?.type !== hovered) {
            setHovered(shape?.type || null);
        }
    }

    function handleClick(e) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const width = rect.width;
        const height = rect.height;

        const shape = getShapeAt(x, y, width, height);
        if (!shape) return;

        if (!startNode) {
            setStartNode(shape.type);
        } else if (!endNode) {
            setEndNode(shape.type);
        } else {
            setStartNode(shape.type);
            setEndNode(null);
        }
    }

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        function draw() {
            const rect = container.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;

            canvas.width = w;
            canvas.height = h;

            ctx.clearRect(0, 0, w, h);

            drawShapes(ctx, shapes, w, h);

            // Resaltar hover
            if (hovered) {
                const s = shapes.find(s => s.type === hovered);
                if (s) {
                    ctx.save();
                    ctx.strokeStyle = "rgba(0, 150, 255, 0.9)";
                    ctx.lineWidth = w * 0.005;

                    ctx.strokeRect(
                        s.x * w,
                        s.y * h,
                        s.width * w,
                        s.height * h
                    );

                    ctx.restore();
                }
            }

            if (startNode && endNode) {
                const path = bfsShortestPath(graph, startNode, endNode);
                drawPath(ctx, path, w, h);
            }
        }

        draw();
        window.addEventListener("resize", draw);
        return () => window.removeEventListener("resize", draw);
    }, [hovered, startNode, endNode]); // 👈 hovered agregado aquí

    // Cambiar cursor según hover
    useEffect(() => {
        const container = containerRef.current;
        container.style.cursor = hovered ? "pointer" : "default";
    }, [hovered]);


    return (
        <div
            ref={containerRef}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            className="relative md:w-2/3"
        >
            <VenueMap className="w-full h-auto" />
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 pointer-events-none"
            />
        </div>
    );
};


export default InteractiveMap;

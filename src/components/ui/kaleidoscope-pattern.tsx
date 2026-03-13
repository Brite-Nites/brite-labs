"use client";

import { useState, useRef, useEffect } from "react";

interface KaleidoscopePatternProps {
  className?: string;
  lineColor?: string;
  lineOpacity?: number;
  hoverEffect?: boolean;
}

export function KaleidoscopePattern({
  className = "",
  lineColor = "#d8d8d8",
  lineOpacity = 1,
  hoverEffect = true,
}: KaleidoscopePatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse position globally within section bounds
  useEffect(() => {
    if (!hoverEffect) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // Check if mouse is within the section bounds
      const isInBounds =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInBounds) {
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoverEffect]);
  // Grid parameters - regular square grid for this style
  const cellSize = 140;
  const gridCols = 14;
  const gridRows = 10;

  // Generate grid positions
  const gridPoints: { x: number; y: number; index: number }[] = [];
  let idx = 0;
  for (let row = 0; row < gridRows; row++) {
    for (let col = 0; col < gridCols; col++) {
      const x = (col - gridCols / 2 + 0.5) * cellSize;
      const y = (row - gridRows / 2 + 0.5) * cellSize;
      gridPoints.push({ x, y, index: idx++ });
    }
  }

  // Generate the 12-pointed rosette with scalloped edge
  const generateRosette = (cx: number, cy: number, index: number) => {
    const elements: React.JSX.Element[] = [];
    const numPoints = 12;
    const outerRadius = 62;
    const innerRadius = 52;
    const centerRadius = 22;
    const coreRadius = 12;

    // Build the scalloped outer edge path
    let scallopPath = "";
    for (let i = 0; i < numPoints; i++) {
      const angle1 = (i * 30 - 90) * (Math.PI / 180);
      const angle2 = ((i + 1) * 30 - 90) * (Math.PI / 180);
      const midAngle = ((i * 30 + 15) - 90) * (Math.PI / 180);

      const x1 = cx + Math.cos(angle1) * outerRadius;
      const y1 = cy + Math.sin(angle1) * outerRadius;
      const xMid = cx + Math.cos(midAngle) * innerRadius;
      const yMid = cy + Math.sin(midAngle) * innerRadius;
      const x2 = cx + Math.cos(angle2) * outerRadius;
      const y2 = cy + Math.sin(angle2) * outerRadius;

      if (i === 0) {
        scallopPath += `M ${x1} ${y1}`;
      }
      scallopPath += ` L ${xMid} ${yMid} L ${x2} ${y2}`;
    }
    scallopPath += " Z";

    elements.push(
      <path
        key={`scallop-${index}`}
        d={scallopPath}
        fill="none"
        stroke={lineColor}
        strokeWidth="0.6"
        opacity={lineOpacity}
      />
    );

    // Inner 12-pointed star
    let starPath = "";
    for (let i = 0; i < numPoints; i++) {
      const outerAngle = (i * 30 - 90) * (Math.PI / 180);
      const innerAngle = ((i * 30) + 15 - 90) * (Math.PI / 180);

      const xOuter = cx + Math.cos(outerAngle) * (outerRadius - 8);
      const yOuter = cy + Math.sin(outerAngle) * (outerRadius - 8);
      const xInner = cx + Math.cos(innerAngle) * centerRadius;
      const yInner = cy + Math.sin(innerAngle) * centerRadius;

      if (i === 0) {
        starPath += `M ${xOuter} ${yOuter}`;
      }
      starPath += ` L ${xInner} ${yInner}`;

      const nextOuterAngle = ((i + 1) * 30 - 90) * (Math.PI / 180);
      const xNextOuter = cx + Math.cos(nextOuterAngle) * (outerRadius - 8);
      const yNextOuter = cy + Math.sin(nextOuterAngle) * (outerRadius - 8);
      starPath += ` L ${xNextOuter} ${yNextOuter}`;
    }

    elements.push(
      <path
        key={`star-${index}`}
        d={starPath}
        fill="none"
        stroke={lineColor}
        strokeWidth="0.5"
        opacity={lineOpacity * 0.9}
      />
    );

    // Radial lines from center to outer points
    for (let i = 0; i < numPoints; i++) {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      elements.push(
        <line
          key={`ray-${index}-${i}`}
          x1={cx + Math.cos(angle) * coreRadius}
          y1={cy + Math.sin(angle) * coreRadius}
          x2={cx + Math.cos(angle) * (outerRadius - 8)}
          y2={cy + Math.sin(angle) * (outerRadius - 8)}
          stroke={lineColor}
          strokeWidth="0.4"
          opacity={lineOpacity * 0.8}
        />
      );
    }

    // Inner scalloped ring
    let innerScallopPath = "";
    for (let i = 0; i < numPoints; i++) {
      const angle1 = (i * 30 - 90) * (Math.PI / 180);
      const angle2 = ((i + 1) * 30 - 90) * (Math.PI / 180);
      const midAngle = ((i * 30 + 15) - 90) * (Math.PI / 180);

      const x1 = cx + Math.cos(angle1) * (centerRadius + 8);
      const y1 = cy + Math.sin(angle1) * (centerRadius + 8);
      const xMid = cx + Math.cos(midAngle) * centerRadius;
      const yMid = cy + Math.sin(midAngle) * centerRadius;
      const x2 = cx + Math.cos(angle2) * (centerRadius + 8);
      const y2 = cy + Math.sin(angle2) * (centerRadius + 8);

      if (i === 0) {
        innerScallopPath += `M ${x1} ${y1}`;
      }
      innerScallopPath += ` L ${xMid} ${yMid} L ${x2} ${y2}`;
    }
    innerScallopPath += " Z";

    elements.push(
      <path
        key={`inner-scallop-${index}`}
        d={innerScallopPath}
        fill="none"
        stroke={lineColor}
        strokeWidth="0.4"
        opacity={lineOpacity * 0.7}
      />
    );

    // Center circle
    elements.push(
      <circle
        key={`center-${index}`}
        cx={cx}
        cy={cy}
        r={coreRadius}
        fill="none"
        stroke={lineColor}
        strokeWidth="0.5"
        opacity={lineOpacity * 0.8}
      />
    );

    return elements;
  };

  // Generate the connecting kite shapes between rosettes
  const generateConnectors = () => {
    const elements: React.JSX.Element[] = [];
    const visited = new Set<string>();

    gridPoints.forEach((p1, i) => {
      gridPoints.forEach((p2, j) => {
        if (i >= j) return;
        const dx = Math.abs(p1.x - p2.x);
        const dy = Math.abs(p1.y - p2.y);

        // Only connect adjacent cells (horizontal, vertical, or diagonal)
        const isAdjacent = (dx < cellSize * 1.1 && dy < 5) ||
                          (dy < cellSize * 1.1 && dx < 5) ||
                          (dx < cellSize * 1.1 && dy < cellSize * 1.1);

        if (isAdjacent) {
          const key = `${Math.min(i, j)}-${Math.max(i, j)}`;
          if (!visited.has(key)) {
            visited.add(key);

            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
            const perpAngle = angle + Math.PI / 2;

            // Kite/diamond shape at the connection point
            const kiteSize = dx > 5 && dy > 5 ? 18 : 22; // Smaller for diagonals
            const kiteWidth = dx > 5 && dy > 5 ? 10 : 14;

            elements.push(
              <path
                key={`kite-${key}`}
                d={`
                  M ${midX + Math.cos(angle) * kiteSize} ${midY + Math.sin(angle) * kiteSize}
                  L ${midX + Math.cos(perpAngle) * kiteWidth} ${midY + Math.sin(perpAngle) * kiteWidth}
                  L ${midX - Math.cos(angle) * kiteSize} ${midY - Math.sin(angle) * kiteSize}
                  L ${midX - Math.cos(perpAngle) * kiteWidth} ${midY - Math.sin(perpAngle) * kiteWidth}
                  Z
                `}
                fill="none"
                stroke={lineColor}
                strokeWidth="0.5"
                opacity={lineOpacity * 0.85}
              />
            );

            // Inner diamond
            const innerSize = kiteSize * 0.5;
            const innerWidth = kiteWidth * 0.5;
            elements.push(
              <path
                key={`kite-inner-${key}`}
                d={`
                  M ${midX + Math.cos(angle) * innerSize} ${midY + Math.sin(angle) * innerSize}
                  L ${midX + Math.cos(perpAngle) * innerWidth} ${midY + Math.sin(perpAngle) * innerWidth}
                  L ${midX - Math.cos(angle) * innerSize} ${midY - Math.sin(angle) * innerSize}
                  L ${midX - Math.cos(perpAngle) * innerWidth} ${midY - Math.sin(perpAngle) * innerWidth}
                  Z
                `}
                fill="none"
                stroke={lineColor}
                strokeWidth="0.35"
                opacity={lineOpacity * 0.6}
              />
            );

            // Connecting lines from rosette edges to kite
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > cellSize * 0.5) {
              elements.push(
                <line
                  key={`conn-line-${key}`}
                  x1={p1.x + Math.cos(angle) * 62}
                  y1={p1.y + Math.sin(angle) * 62}
                  x2={midX - Math.cos(angle) * kiteSize}
                  y2={midY - Math.sin(angle) * kiteSize}
                  stroke={lineColor}
                  strokeWidth="0.4"
                  opacity={lineOpacity * 0.7}
                />
              );
              elements.push(
                <line
                  key={`conn-line2-${key}`}
                  x1={p2.x - Math.cos(angle) * 62}
                  y1={p2.y - Math.sin(angle) * 62}
                  x2={midX + Math.cos(angle) * kiteSize}
                  y2={midY + Math.sin(angle) * kiteSize}
                  stroke={lineColor}
                  strokeWidth="0.4"
                  opacity={lineOpacity * 0.7}
                />
              );
            }
          }
        }
      });
    });

    return elements;
  };

  // Convert screen coordinates to SVG viewBox coordinates
  const screenToSvg = (screenX: number, screenY: number) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    // ViewBox is -980 -700 1960 1400
    const svgX = ((screenX / rect.width) * 1960) - 980;
    const svgY = ((screenY / rect.height) * 1400) - 700;
    return { x: svgX, y: svgY };
  };

  const svgMousePos = screenToSvg(mousePos.x, mousePos.y);
  const blobRadius = 500; // Much larger static radius

  // Generate a version of the rosette with gradient stroke
  const generateColoredRosette = (cx: number, cy: number, index: number) => {
    const elements: React.JSX.Element[] = [];
    const numPoints = 12;
    const outerRadius = 62;
    const innerRadius = 52;
    const centerRadius = 22;
    const coreRadius = 12;

    // Build the scalloped outer edge path
    let scallopPath = "";
    for (let i = 0; i < numPoints; i++) {
      const angle1 = (i * 30 - 90) * (Math.PI / 180);
      const angle2 = ((i + 1) * 30 - 90) * (Math.PI / 180);
      const midAngle = ((i * 30 + 15) - 90) * (Math.PI / 180);

      const x1 = cx + Math.cos(angle1) * outerRadius;
      const y1 = cy + Math.sin(angle1) * outerRadius;
      const xMid = cx + Math.cos(midAngle) * innerRadius;
      const yMid = cy + Math.sin(midAngle) * innerRadius;
      const x2 = cx + Math.cos(angle2) * outerRadius;
      const y2 = cy + Math.sin(angle2) * outerRadius;

      if (i === 0) {
        scallopPath += `M ${x1} ${y1}`;
      }
      scallopPath += ` L ${xMid} ${yMid} L ${x2} ${y2}`;
    }
    scallopPath += " Z";

    elements.push(
      <path
        key={`c-scallop-${index}`}
        d={scallopPath}
        fill="none"
        stroke="url(#brandGradient)"
        strokeWidth="0.8"
      />
    );

    // Inner 12-pointed star
    let starPath = "";
    for (let i = 0; i < numPoints; i++) {
      const outerAngle = (i * 30 - 90) * (Math.PI / 180);
      const innerAngle = ((i * 30) + 15 - 90) * (Math.PI / 180);

      const xOuter = cx + Math.cos(outerAngle) * (outerRadius - 8);
      const yOuter = cy + Math.sin(outerAngle) * (outerRadius - 8);
      const xInner = cx + Math.cos(innerAngle) * centerRadius;
      const yInner = cy + Math.sin(innerAngle) * centerRadius;

      if (i === 0) {
        starPath += `M ${xOuter} ${yOuter}`;
      }
      starPath += ` L ${xInner} ${yInner}`;

      const nextOuterAngle = ((i + 1) * 30 - 90) * (Math.PI / 180);
      const xNextOuter = cx + Math.cos(nextOuterAngle) * (outerRadius - 8);
      const yNextOuter = cy + Math.sin(nextOuterAngle) * (outerRadius - 8);
      starPath += ` L ${xNextOuter} ${yNextOuter}`;
    }

    elements.push(
      <path
        key={`c-star-${index}`}
        d={starPath}
        fill="none"
        stroke="url(#brandGradient)"
        strokeWidth="0.7"
      />
    );

    // Radial lines
    for (let i = 0; i < numPoints; i++) {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      elements.push(
        <line
          key={`c-ray-${index}-${i}`}
          x1={cx + Math.cos(angle) * coreRadius}
          y1={cy + Math.sin(angle) * coreRadius}
          x2={cx + Math.cos(angle) * (outerRadius - 8)}
          y2={cy + Math.sin(angle) * (outerRadius - 8)}
          stroke="url(#brandGradient)"
          strokeWidth="0.5"
        />
      );
    }

    // Inner scalloped ring
    let innerScallopPath = "";
    for (let i = 0; i < numPoints; i++) {
      const angle1 = (i * 30 - 90) * (Math.PI / 180);
      const angle2 = ((i + 1) * 30 - 90) * (Math.PI / 180);
      const midAngle = ((i * 30 + 15) - 90) * (Math.PI / 180);

      const x1 = cx + Math.cos(angle1) * (centerRadius + 8);
      const y1 = cy + Math.sin(angle1) * (centerRadius + 8);
      const xMid = cx + Math.cos(midAngle) * centerRadius;
      const yMid = cy + Math.sin(midAngle) * centerRadius;
      const x2 = cx + Math.cos(angle2) * (centerRadius + 8);
      const y2 = cy + Math.sin(angle2) * (centerRadius + 8);

      if (i === 0) {
        innerScallopPath += `M ${x1} ${y1}`;
      }
      innerScallopPath += ` L ${xMid} ${yMid} L ${x2} ${y2}`;
    }
    innerScallopPath += " Z";

    elements.push(
      <path
        key={`c-inner-scallop-${index}`}
        d={innerScallopPath}
        fill="none"
        stroke="url(#brandGradient)"
        strokeWidth="0.5"
      />
    );

    // Center circle
    elements.push(
      <circle
        key={`c-center-${index}`}
        cx={cx}
        cy={cy}
        r={coreRadius}
        fill="none"
        stroke="url(#brandGradient)"
        strokeWidth="0.6"
      />
    );

    return elements;
  };

  // Generate colored connectors
  const generateColoredConnectors = () => {
    const elements: React.JSX.Element[] = [];
    const visited = new Set<string>();

    gridPoints.forEach((p1, i) => {
      gridPoints.forEach((p2, j) => {
        if (i >= j) return;
        const dx = Math.abs(p1.x - p2.x);
        const dy = Math.abs(p1.y - p2.y);

        const isAdjacent = (dx < cellSize * 1.1 && dy < 5) ||
                          (dy < cellSize * 1.1 && dx < 5) ||
                          (dx < cellSize * 1.1 && dy < cellSize * 1.1);

        if (isAdjacent) {
          const key = `${Math.min(i, j)}-${Math.max(i, j)}`;
          if (!visited.has(key)) {
            visited.add(key);

            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
            const perpAngle = angle + Math.PI / 2;

            const kiteSize = dx > 5 && dy > 5 ? 18 : 22;
            const kiteWidth = dx > 5 && dy > 5 ? 10 : 14;

            elements.push(
              <path
                key={`c-kite-${key}`}
                d={`
                  M ${midX + Math.cos(angle) * kiteSize} ${midY + Math.sin(angle) * kiteSize}
                  L ${midX + Math.cos(perpAngle) * kiteWidth} ${midY + Math.sin(perpAngle) * kiteWidth}
                  L ${midX - Math.cos(angle) * kiteSize} ${midY - Math.sin(angle) * kiteSize}
                  L ${midX - Math.cos(perpAngle) * kiteWidth} ${midY - Math.sin(perpAngle) * kiteWidth}
                  Z
                `}
                fill="none"
                stroke="url(#brandGradient)"
                strokeWidth="0.7"
              />
            );

            const innerSize = kiteSize * 0.5;
            const innerWidth = kiteWidth * 0.5;
            elements.push(
              <path
                key={`c-kite-inner-${key}`}
                d={`
                  M ${midX + Math.cos(angle) * innerSize} ${midY + Math.sin(angle) * innerSize}
                  L ${midX + Math.cos(perpAngle) * innerWidth} ${midY + Math.sin(perpAngle) * innerWidth}
                  L ${midX - Math.cos(angle) * innerSize} ${midY - Math.sin(angle) * innerSize}
                  L ${midX - Math.cos(perpAngle) * innerWidth} ${midY - Math.sin(perpAngle) * innerWidth}
                  Z
                `}
                fill="none"
                stroke="url(#brandGradient)"
                strokeWidth="0.5"
              />
            );

            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > cellSize * 0.5) {
              elements.push(
                <line
                  key={`c-conn-line-${key}`}
                  x1={p1.x + Math.cos(angle) * 62}
                  y1={p1.y + Math.sin(angle) * 62}
                  x2={midX - Math.cos(angle) * kiteSize}
                  y2={midY - Math.sin(angle) * kiteSize}
                  stroke="url(#brandGradient)"
                  strokeWidth="0.5"
                />
              );
              elements.push(
                <line
                  key={`c-conn-line2-${key}`}
                  x1={p2.x - Math.cos(angle) * 62}
                  y1={p2.y - Math.sin(angle) * 62}
                  x2={midX + Math.cos(angle) * kiteSize}
                  y2={midY + Math.sin(angle) * kiteSize}
                  stroke="url(#brandGradient)"
                  strokeWidth="0.5"
                />
              );
            }
          }
        }
      });
    });

    return elements;
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        maskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, black 0%, black 25%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, black 0%, black 25%, transparent 70%)",
      }}
    >
      {/* Base gray pattern */}
      <svg
        className="absolute w-full h-full"
        viewBox="-980 -700 1960 1400"
        preserveAspectRatio="xMidYMid slice"
        style={{ minWidth: "100%", minHeight: "100%" }}
      >
        <g>
          {/* Connector shapes (static) */}
          {generateConnectors()}

          {/* Rosettes */}
          {gridPoints.map((point) => (
            <g key={`rosette-group-${point.index}`}>
              {generateRosette(point.x, point.y, point.index)}
            </g>
          ))}
        </g>
      </svg>

      {/* Colored pattern layer - revealed by blob mask on hover */}
      {hoverEffect && (
        <svg
          className="absolute w-full h-full transition-opacity duration-300"
          viewBox="-980 -700 1960 1400"
          preserveAspectRatio="xMidYMid slice"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            opacity: isHovering ? 1 : 0,
          }}
        >
          <defs>
            {/* Brand gradient - pastel/subtle version */}
            <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f2d4d4" />
              <stop offset="53%" stopColor="#e8daf0" />
              <stop offset="100%" stopColor="#d8daf2" />
            </linearGradient>

            {/* Static radial gradient mask centered on cursor */}
            <radialGradient
              id="cursorGradientMask"
              cx={svgMousePos.x}
              cy={svgMousePos.y}
              r={blobRadius}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>

            <mask id="blobMask">
              <rect x="-980" y="-700" width="1960" height="1400" fill="url(#cursorGradientMask)" />
            </mask>
          </defs>

          <g mask="url(#blobMask)">
            {/* Colored connectors */}
            {generateColoredConnectors()}

            {/* Colored rosettes */}
            {gridPoints.map((point) => (
              <g key={`colored-rosette-group-${point.index}`}>
                {generateColoredRosette(point.x, point.y, point.index)}
              </g>
            ))}
          </g>
        </svg>
      )}
    </div>
  );
}

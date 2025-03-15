"use client"

import { useEffect, useRef } from "react"

export default function DynamicDataBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 设置canvas尺寸为窗口大小
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // 创建数据点
    const dataPoints: { 
      x: number; 
      y: number; 
      vx: number; 
      vy: number; 
      size: number; 
      color: string;
      pulse: number;
      pulseSpeed: number;
    }[] = []

    // 初始化数据点 - 增加数量
    for (let i = 0; i < 120; i++) {
      dataPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4, // 稍微加快速度
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5, // 增加点的大小
        color: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`,
        pulse: 0,
        pulseSpeed: Math.random() * 0.02 + 0.01
      })
    }

    // 连线的最大距离
    const maxDistance = 200

    // 创建几条动态的装饰线
    const decorativeLines: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      speed: number;
      offset: number;
      dashLength: number;
      gapLength: number;
      opacity: number;
    }[] = [];

    // 初始化装饰线
    for (let i = 0; i < 8; i++) {
      const isHorizontal = Math.random() > 0.5;
      const startPos = Math.random() * 0.8;
      
      decorativeLines.push({
        x1: isHorizontal ? 0 : canvas.width * startPos,
        y1: isHorizontal ? canvas.height * startPos : 0,
        x2: isHorizontal ? canvas.width : canvas.width * (startPos + 0.2),
        y2: isHorizontal ? canvas.height * startPos : canvas.height,
        speed: (Math.random() * 0.5 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
        offset: 0,
        dashLength: Math.random() * 15 + 5,
        gapLength: Math.random() * 10 + 5,
        opacity: Math.random() * 0.15 + 0.05
      });
    }

    // 动画函数
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 绘制数据点和连线
      for (let i = 0; i < dataPoints.length; i++) {
        const point = dataPoints[i]

        // 更新位置
        point.x += point.vx
        point.y += point.vy
        
        // 更新脉冲
        point.pulse += point.pulseSpeed;
        if (point.pulse > 1) point.pulse = 0;
        
        const currentSize = point.size * (1 + Math.sin(point.pulse * Math.PI * 2) * 0.3);

        // 边界检测
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        // 绘制点
        ctx.beginPath()
        ctx.arc(point.x, point.y, currentSize, 0, Math.PI * 2)
        ctx.fillStyle = point.color
        ctx.fill()

        // 绘制连线
        for (let j = i + 1; j < dataPoints.length; j++) {
          const otherPoint = dataPoints[j]
          const dx = point.x - otherPoint.x
          const dy = point.y - otherPoint.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / maxDistance)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // 绘制斜线和虚线
      const drawDashedLine = (x1: number, y1: number, x2: number, y2: number, dashLength: number, gapLength: number, offset = 0) => {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const dashCount = Math.floor(distance / (dashLength + gapLength));
        const dashX = dx / distance * (dashLength + gapLength);
        const dashY = dy / distance * (dashLength + gapLength);

        ctx.beginPath();
        for (let i = 0; i < dashCount; i++) {
          const startX = x1 + (dashX * i) + (offset % (dashLength + gapLength)) * dashX / (dashLength + gapLength);
          const startY = y1 + (dashY * i) + (offset % (dashLength + gapLength)) * dashY / (dashLength + gapLength);
          
          if (startX >= x1 && startX <= x2 && startY >= y1 && startY <= y2) {
            ctx.moveTo(startX, startY);
            
            const endX = Math.min(startX + dashX * dashLength / (dashLength + gapLength), x2);
            const endY = Math.min(startY + dashY * dashLength / (dashLength + gapLength), y2);
            
            ctx.lineTo(endX, endY);
          }
        }
        ctx.stroke();
      };

      // 更新和绘制动态装饰线
      for (const line of decorativeLines) {
        line.offset += line.speed;
        
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
        ctx.lineWidth = 1;
        
        drawDashedLine(
          line.x1, line.y1, 
          line.x2, line.y2, 
          line.dashLength, line.gapLength,
          line.offset
        );
      }

      // 绘制几条装饰性的斜线
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      
      // 右上角斜线
      drawDashedLine(canvas.width * 0.7, 0, canvas.width, canvas.height * 0.3, 10, 5);
      drawDashedLine(canvas.width * 0.8, 0, canvas.width, canvas.height * 0.2, 10, 5);
      
      // 左下角斜线
      drawDashedLine(0, canvas.height * 0.7, canvas.width * 0.3, canvas.height, 10, 5);
      drawDashedLine(0, canvas.height * 0.8, canvas.width * 0.2, canvas.height, 10, 5);
      
      // 添加更多斜线
      drawDashedLine(canvas.width * 0.2, 0, canvas.width * 0.5, canvas.height * 0.1, 8, 4);
      drawDashedLine(canvas.width * 0.9, canvas.height * 0.5, canvas.width, canvas.height * 0.7, 8, 4);

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}


"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
  delay?: number
}

const Counter = ({ value, suffix = "", duration = 2, delay = .5 }: CounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")

      let startTime: number
      let animationFrameId: number

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const progressPercent = Math.min(progress / (duration * 1000), 1)

        const easeOutQuart = 1 - Math.pow(1 - progressPercent, 4)
        const currentCount = Math.floor(easeOutQuart * value)

        setCount(currentCount)

        if (progressPercent < 1) {
          animationFrameId = requestAnimationFrame(updateCount)
        } else {
          setCount(value)
        }
      }

      animationFrameId = requestAnimationFrame(updateCount)

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
        }
      }
    }
  }, [isInView, value, duration, controls])

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      viewport={{once: true}}
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.2,
            delay,
          },
        },
      }}
    >
      {count}
      {suffix}
    </motion.span>
  )
}

export default Counter


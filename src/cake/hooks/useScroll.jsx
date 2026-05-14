import { useEffect, useRef, useState } from 'react'

const getScrollPosition = (target) => {
    if (!target) {
        return { scrollX: 0, scrollY: 0 }
    }

    if (target === window) {
        return { scrollX: window.scrollX, scrollY: window.scrollY }
    }

    return {
        scrollX: target.scrollLeft ?? 0,
        scrollY: target.scrollTop ?? 0,
    }
}

/**
 * A reusable scroll hook that tracks scroll position, threshold state, and direction.
 * @param {Object} options
 * @param {number} options.threshold - The scroll y-position at which `isScrolled` becomes true.
 * @param {Window|Element|null} options.target - Optional scroll target. Defaults to window.
 */
const useScroll = ({ threshold = 0, target = typeof window !== 'undefined' ? window : null } = {}) => {
    const [scrollState, setScrollState] = useState({
        scrollX: 0,
        scrollY: 0,
        isScrolled: false,
        direction: 'up',
    })
    const previousY = useRef(0)
    const ticking = useRef(false)

    useEffect(() => {
        const element = target || (typeof window !== 'undefined' ? window : null)
        if (!element || typeof element.addEventListener !== 'function') {
            return undefined
        }

        const updateScrollState = () => {
            const { scrollX, scrollY } = getScrollPosition(element)
            const direction = scrollY > previousY.current ? 'down' : 'up'
            previousY.current = scrollY

            setScrollState({
                scrollX,
                scrollY,
                isScrolled: scrollY > threshold,
                direction,
            })
            ticking.current = false
        }

        const handleScroll = () => {
            if (ticking.current) {
                return
            }
            ticking.current = true
            window.requestAnimationFrame(updateScrollState)
        }

        handleScroll()
        element.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            element.removeEventListener('scroll', handleScroll)
        }
    }, [threshold, target])

    return scrollState
}

export default useScroll
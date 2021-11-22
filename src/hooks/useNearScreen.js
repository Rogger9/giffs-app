import { useEffect, useState, useRef } from 'react'

const useNearScreen = ({ distance = '60px', externalRef, once = true } = {}) => {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const element = entries[0]
      if (element.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    ;(() => {
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')

      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })

      element && observer.observe(element)
    })()


    // Promise.resolve(
    //   typeof IntersectionObserver !== 'undefined'
    //     ? IntersectionObserver
    //     : import('intersection-observer')
    // ).then(() => {
    //   observer = new IntersectionObserver(onChange, {
    //     rootMargin: distance
    //   })

    //   element && observer.observe(element)
    // })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}

export default useNearScreen
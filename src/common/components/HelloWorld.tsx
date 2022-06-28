import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const wave = keyframes`
  from, 50%, to {
    transform: rotate(0deg);
  }
  10%, 30% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  40% {
    transform: rotate(9deg);
  }
`

const HelloWorldWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  fontSize: '4.5rem',
  backgroundColor: '#1A202C',
  color: 'rgba(255, 255, 255, 0.92)',
})

const WaveSpan = styled.span({
  display: 'inline-block',
  animationName: wave,
  animationDuration: '2500ms',
  animationIterationCount: 'infinite',
  transformOrigin: '70% 70%',
  marginRight: '1rem',
})

const greetings = ['Hello, World!', 'Halo, Dunia!']

const HelloWorld = () => {
  const [hello, setHello] = useState(0)

  useEffect(() => {
    const changeHello = setInterval(() => {
      setHello((greeting) =>
        greeting >= greetings.length - 1 ? 0 : greeting + 1,
      )
    }, 2500)
    return () => clearInterval(changeHello)
  }, [])

  return (
    <HelloWorldWrapper>
      <WaveSpan role='img' aria-label='wave'>
        {`\u{1f44b}`}
      </WaveSpan>{' '}
      {greetings[hello]}
    </HelloWorldWrapper>
  )
}

export default HelloWorld

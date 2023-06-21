import './App.css'
import { Card } from './components/card'


function App() {
  return (
    <>
      <Card 
      name='Emma Bostian'
      img='https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png'
      pais='Sweden'
      cargo='Software Engineer'
      empresa='Spotify'
      testimonio='"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify".'
      />
      <Card 
      name='Sarah Chima'
      img='https://www.freecodecamp.org/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png'
      pais='Nigeria'
      cargo='Software Engineer'
      empresa='ChatDesk'
      testimonio='"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación de un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble".'
      />
      <Card 
      name='Shawn Wang'
      img='https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png'
      pais='Singapore'
      cargo='Software Engineer'
      empresa='Amazon'
      testimonio='"Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
      />

    </>
  )
}

export default App

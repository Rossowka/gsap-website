import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText); // you only have to do it once to make sure the plugins are used globally - putting it in App file is the way to go

const App = () => {
  return (
    <div className="flex-center">
      <h1 className="text-3xl">Hello</h1>
    </div>
  )
}

export default App
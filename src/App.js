import { useState } from "react";

import Preloader from "./components/preloader/Preloader";
import Main from "./components/main/Main";

import './index.scss'

const App = () => {
  const [loadedAllImages, setLoadedAllImages] = useState(false)

  return loadedAllImages ? <Main /> : <Preloader setLoadedAllImages={setLoadedAllImages} />
}

export default App;

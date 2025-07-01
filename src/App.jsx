import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alert from "./components/Alert";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Alert type="info" message="You have 3 new messages" />
      <Alert type="success" message="Transaction Successful" />
      <Alert
        type="warning"
        message="Past Credit Limit!"
      />
      <Alert type="error" message="Transaction Failed" />
    </>
  );
}

export default App

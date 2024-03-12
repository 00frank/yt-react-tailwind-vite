import Sidebar from '@components/Sidebar'
import Header from '@components/Header'
import Main from '@components/Main'

function App() {
  return (
    <div className="bg-zinc-900 relative w-full overflow-hidden">
      <Sidebar />
      <Header />
      <Main />
    </div>
  )
}

export default App

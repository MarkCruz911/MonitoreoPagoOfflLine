import './App.css'
import Sidebar from './componentes/sidebar';
import DetailView from './componentes/DetailView';

function App() {

  return (
    <div className="flex h-screen">
      <Sidebar />
      <DetailView />
    </div>
  );
}

export default App

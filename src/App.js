import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './Routes/routes';

function App() {
  return (
    <div>
      <BrowserRouter>

          <RoutesApp/>

      </BrowserRouter>
    </div>
  );
}

export default App;

/* Import Browser Router */
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Import Redux Toolkit */
import store from './store.jsx';
import { Provider } from 'react-redux';

/* Import CSS */
import './index.css';
import './App.css';

/* Import boxicons */
import 'boxicons';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* Wrap the app in Redux Provider and BrowserRouter */}  
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>
);

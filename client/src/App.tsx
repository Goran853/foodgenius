import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from 'pages/Home';
import RootLayout from 'layout/RootLayout';

// const links = [
//   'Vorteile',
//   'Produkt',
//   'Referenzen',
//   'Jobs',
//   'Über uns',
//   'Kontakt',
// ];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

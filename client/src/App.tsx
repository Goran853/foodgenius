import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from 'pages/Home';
import RootLayout from 'layout/RootLayout';
import NotFound from 'pages/NotFound';

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
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

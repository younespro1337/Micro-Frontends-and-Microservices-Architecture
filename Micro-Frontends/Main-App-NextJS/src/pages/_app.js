// main-app/src/pages/_app.js
import React, { useEffect , Suspense} from 'react';
import Navbar from '@/components/navbar/nav.js';
import store from '@/store';
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps }) {
  return (
<>
<Provider store={store}>
<Navbar />
<Component {...pageProps} />
</Provider>
</>
  );

}

export default MyApp;

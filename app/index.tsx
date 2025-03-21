import React, { Suspense } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Loading } from './components';
import { JokesProvider } from './hooks/useJokesContext';

const Home = React.lazy(() => import('./screens/Home'));

export default function index() {
  return (
    <SafeAreaProvider>
      <Header />
      <Suspense fallback={<Loading />}>
        <JokesProvider>
          <Home />
        </JokesProvider>
      </Suspense>
    </SafeAreaProvider>
  );
}

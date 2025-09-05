import { MainProvider } from './provider/MainProvider';
import { Main } from '../pages/Main';

export const App = () => {
  return (
    <MainProvider>
      <Main />
    </MainProvider>
  );
}

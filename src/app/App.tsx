import './Styles/Styles.scss';
import '../shared/fonts/Styles/Inter.scss';
import { MainProvider } from './provider/MainProvider';
import { Main } from '../pages';

export const App = () => {
  return (
    <MainProvider>
      <Main />
    </MainProvider>
  );
}

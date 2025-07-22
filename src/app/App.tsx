import './Styles/Styles.scss';
import '../shared/fonts/Styles/Inter.scss';
import { MainProvider } from './provider/MainProvider';

export const App = () => {
  return (
    <MainProvider>
      <h1>Hello</h1>
    </MainProvider>
  );
}

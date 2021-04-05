import Layout from './components/Layout';
import Simulator from './components/Simulator';
import './assets/styles/main.scss';

function App() {
  return (
    <Layout>
      <Simulator maxCredit={50000} minCredit={5000} maxInstallments={24} minInstallments={3} />
    </Layout>
  );
}

export default App;

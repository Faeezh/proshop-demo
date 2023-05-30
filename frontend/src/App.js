import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <h1>Test 11 05 2023</h1>
      <h1>Test More Code 11 05 2023</h1>
      <h1>Connection string   mongodb+srv://faeezhartley:faeezhartley@cluster0.f4dnydd.mongodb.net/proshop </h1>
      <Footer />
    </>
  );
}

export default App;

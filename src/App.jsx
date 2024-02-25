import "./App.css";
import { Header, MainContent, ProductSection, Footer, FAQ } from "./components/websections";
import Button from "./components/common/button";

function App() {
  return (
    <div>
      <Button />
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ/>
      <Footer />
    </div>
  );
}

export default App;

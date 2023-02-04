import logo from './logo.svg';
import './App.css';
import Test from "./Components/Test.js";
import Main from "./Components/Main.js";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import VirusTotal from './Components/VirusTotal';
import SuspiciousDownloads from './Components/SuspiciousDownloads';
import DeceptiveCalls from './Components/DeceptiveCalls';

function App() {
  return (
    // <Route exact path="/virustotal" component={VirusTotal}/>
    //       <Route exact path="/suspiciousdownloads" component={SuspiciousDownloads}/>
    //       <Route exact path="/deceptivecalls" component={DeceptiveCalls}/>
    
    <ChakraProvider>
      <div style={{
            height: "100vh", 
            maxHeight: "100vh",
            minHeight: "100vh",
            // width: "100vw",
            // minWidth: "100vw",
            // maxWidth: "100vw",
            // display: "flex",
            // flexDirection: "column", 
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "#F7F7F7",
            overflowY: "auto"
        }}> 
          <Router>
          <Main />
          <Routes>
            {/* <Route path="/" element={<Main/>} /> */}
            <Route path="/virustotal" element={<VirusTotal/>} />
            <Route path="/suspiciousdownloads" element={<SuspiciousDownloads/>} />
            <Route path="/deceptivecalls" element={<DeceptiveCalls/>} />
          </Routes>
        </Router>
        </div>
    </ChakraProvider>
  );
}

export default App;

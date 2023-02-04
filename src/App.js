import logo from './logo.svg';
import './App.css';
import Test from "./Components/Test.js";
import Main from "./Components/Main.js";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import VirusTotal from './Components/VirusTotal';
import SuspiciousDownloads from './Components/SuspiciousDownloads';
import DeceptiveCalls from './Components/DeceptiveCalls';
import AppDetails from './Components/AppDetails';

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
          {/* <Main /> */}
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route exact path="/virustotal" element={<VirusTotal/>} />
            <Route exact path="/suspiciousdownloads" element={<SuspiciousDownloads/>} />
            <Route exact path="/deceptivecalls" element={<DeceptiveCalls/>} />
            <Route exact path="/appdetails" element={<AppDetails/>} />
          </Routes>
        </Router>
        </div>
    </ChakraProvider>
  );
}

export default App;

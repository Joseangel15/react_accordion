import './App.css';
import Accordion from './components/accordion';
import TabTest from './components/custom-tabs/tab-test';
import Tabs from './components/custom-tabs/tabs';
import ImageSlider from './components/image-slider';
import LighDarkMode from './components/ligh-dark-mode';
import LoadMoreData from './components/load-more-button';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* StarRating component */}
      {/* <StarRating /> */}

      {/* Image Slider component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={'10'}/> */}

      {/* Load more products component */}
      {/* <LoadMoreData /> */}

      {/* Tree View component */}
      {/* <TreeView menus={menus}/> */}

      {/* QR Code Generator component */}
      {/* <QRCodeGenerator /> */}

      {/* light and dark theme mode */}
      {/* <LighDarkMode /> */}

      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* Custom Tabs component */}
      <TabTest />
    </div>
  );
}

export default App;

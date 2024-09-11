import './App.css';
import Accordion from './components/accordion';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-button';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
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
      <QRCodeGenerator />
    </div>
  );
}

export default App;

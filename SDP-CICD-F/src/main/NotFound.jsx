import NotFoundImage from './notfound.png';
import './styles/404.css'; // Import the CSS file for styling
export default function PageNotFound() {
  return (
    <div className="not-found-container">
      <h1>Page Not Found</h1>
      <img src={NotFoundImage} alt="Page Not Found" className="not-found-image" />
    </div>
  );
}

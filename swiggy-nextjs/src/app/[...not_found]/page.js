import Link from 'next/link';
import Image from 'next/image';
import './styles.css'

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1>404 - Page Not Found</h1>
      <p>We're sorry, but the page you were looking for does not exist.</p>
     <button className="btn btn-warning"> <Link href="/" style={{ height:"40px", width:"40px", backgroundColor:"orange"}}>Go back home</Link></button>
    </div>
  );
}

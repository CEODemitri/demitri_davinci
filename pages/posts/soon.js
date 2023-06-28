import Link from 'next/link'
import UpgradeList from './components/UpgradeList';


export default function soonPost() {
  return (
    <>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      <h1>
        <p>
          soon to Post
        </p>
      </h1>
      <UpgradeList />
    </>
  );
}
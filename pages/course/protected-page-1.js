import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';


export default function ProectedContent1() {
    return (
    <Layout>
    <h1>Protected Content For Page 1 Goes Here</h1>
    <p>
        Some content that is protected.
    </p>



  <Image
  priority
  src="/images/profile.jpg"
  height={100}
  width={100}
  alt="n-gram"
/>
</Layout>
    );

  }
  
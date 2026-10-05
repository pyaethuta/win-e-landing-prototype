import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1>Project Not Found</h1>
      <p>The project you're looking for doesn't exist.</p>
      <Link href="/projects" style={{ color: '#07417d', textDecoration: 'underline' }}>
        Return to Projects
      </Link>
    </div>
  );
}

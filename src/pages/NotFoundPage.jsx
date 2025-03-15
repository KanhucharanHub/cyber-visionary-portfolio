
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="glass-card p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Page not found</p>
        <p className="mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-cyber">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

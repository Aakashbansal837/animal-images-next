
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="flex-1">
          <Link href={'/'} className="btn btn-ghost text-3xl">Home</Link>
        </div>
    </div>
    );
};

export default Navbar;

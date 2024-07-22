
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import logger from '../helpers/logger';

interface NavbarProps {
  showSearch ?: boolean
  doSearch ?: (value : string) => string | void;
}

const Navbar : React.FC<NavbarProps> = ({showSearch = false , doSearch}) => {
    let [value , setValue] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let val = event.target.value;
      setValue(val);

      if(doSearch){
        doSearch(val);
      }
    }

    return (
      <div className="navbar">
        <div className="flex flex-col sm:flex-row justify-between w-screen">
          <Link href={'/'} className="btn btn-ghost text-3xl">Home</Link>
          { showSearch && 
            <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="search by first 4 char from name"
            className="input input-bordered input-accent w-full max-w-xs" />
          }
        </div>
    </div>
    );
};

export default Navbar;

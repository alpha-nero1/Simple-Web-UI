import Link from 'next/link';
import React from 'react';

// This creates a custom component that wraps an <a> tag
const RedLink = () => <div></div>

function NavLink({ href, name }: any) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      {/* <RedLink>{name}</RedLink> */}
    </Link>
  )
}

export default NavLink

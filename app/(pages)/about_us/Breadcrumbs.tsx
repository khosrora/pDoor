import Link from "next/link";
import React from "react";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href={"/"}>خانه</Link>
        </li>
        <li>
          <p>درباره ما</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;

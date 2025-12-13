import Link from "next/link";
import React from "react";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-sm max-w-7xl mx-auto">
      <ul>
        <li>
          <Link href={"/"}>صفحه اصلی</Link>
        </li>
        <li>
          <p>پرشیادر</p>
        </li>
        <li>
          <p>درباره ما</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;

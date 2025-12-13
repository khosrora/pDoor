import Link from "next/link";
import React from "react";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href={"/"}>صفحه اصلی</Link>
        </li>
        <li>
          <p>پرشیادر</p>
        </li>
        <li>
          <p>ارتباط با ما</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;

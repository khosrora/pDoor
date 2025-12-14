import Link from "next/link";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href={"/"}>صفحه اصلی</Link>
        </li>
         <li>
          <p>صنایع</p>
        </li>
        <li>
          <p>بیمارستان ها</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;

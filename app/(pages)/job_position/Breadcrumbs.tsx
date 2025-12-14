import Link from "next/link";

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
          <p>موقعیت شغلی</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;

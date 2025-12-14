import Link from "next/link";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href={"/"}>صفحه اصلی</Link>
        </li>
        <li>
          <p>خدمات</p>
        </li>
        <li>
          <p>نصب و نگهداری</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;

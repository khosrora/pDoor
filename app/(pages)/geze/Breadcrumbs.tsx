import Link from "next/link";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href={"/"}>صفجه اصلی</Link>
        </li>
        <li>
          <p>برند</p>
        </li>
        <li>
          <p> GEZE</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;

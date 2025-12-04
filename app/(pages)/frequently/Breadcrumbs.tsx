import Link from "next/link";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href={"/"}>خانه</Link>
        </li>
        <li>
          <p>سوالات متداول</p>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;

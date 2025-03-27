import Link from "next/link";

export default function Navigation_12() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/quiz1/p1_12"
            className="hover:text-accent-400 transition-colors"
          >
            p1_12
          </Link>
        </li>
        <li>
          <Link
            href="/quiz1/p2_12"
            className="hover:text-accent-400 transition-colors"
          >
            p2_12
          </Link>
        </li>
        <li>
          <Link
            href="/quiz1/p3_12"
            className="hover:text-accent-400 transition-colors"
          >
            p3_12
          </Link>
        </li>
        <li>
          <Link
            href="/quiz1/p4_12"
            className="hover:text-accent-400 transition-colors"
          >
            p4_12
          </Link>
        </li>
      </ul>
    </nav>
  );
}

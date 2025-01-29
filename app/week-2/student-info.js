import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name:Hemang Sharma</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/hemang19/cprg306-assignments.git" target="_blank">
          hemang19
        </Link>
      </p>
    </div>
  );
}



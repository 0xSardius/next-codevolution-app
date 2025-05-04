import { Card } from "@/app/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <h1>Archived Notifications</h1>
      <div>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}

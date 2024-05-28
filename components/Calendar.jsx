import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Calendar() {
  return (
    <div>
      <Button variant="secondary" asChild className="text-white">
        <Link href="/booking">BOOK</Link>
      </Button>
    </div>
  );
}

export default Calendar;

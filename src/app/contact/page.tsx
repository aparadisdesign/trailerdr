import { Suspense } from "react";
import Contact from "../../views/Contact";

export default function ContactPage() {
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
}

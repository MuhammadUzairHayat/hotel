import type { Metadata } from "next";
import { LegalPage } from "@/components/common/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions for booking and staying at Swat Rezidor Hotel.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms outline the general conditions for enquiries, bookings, and stays at Swat Rezidor Hotel. Please review them before making a reservation."
      sections={[
        {
          heading: "Enquiries & Reservations",
          body: "Submitting an enquiry does not guarantee a reservation. All bookings are subject to availability and confirmation by our reservations team.",
        },
        {
          heading: "Check-in & Check-out",
          body: "Standard check-in is from 2:00 PM and check-out is by 12:00 PM. Early check-in or late check-out may be arranged subject to availability.",
        },
        {
          heading: "Cancellations",
          body: "Cancellation terms depend on the room type and dates of your stay. Details will be shared with your booking confirmation.",
        },
        {
          heading: "Guest Conduct",
          body: "We ask all guests to respect the property, staff, and fellow guests to help maintain the peaceful atmosphere of Swat Rezidor Hotel.",
        },
      ]}
    />
  );
}

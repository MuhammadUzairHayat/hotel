import type { Metadata } from "next";
import { LegalPage } from "@/components/common/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Swat Rezidor Hotel collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains how we handle the information you share when enquiring about or staying at Swat Rezidor Hotel."
      sections={[
        {
          heading: "Information We Collect",
          body: "We collect details you provide through our enquiry and contact forms, such as your name, email, phone number, and stay preferences, so we can respond to your requests and arrange your visit.",
        },
        {
          heading: "How We Use Your Information",
          body: "Your information is used solely to process enquiries, confirm reservations, and improve your experience with us. We do not sell your personal data to third parties.",
        },
        {
          heading: "Data Security",
          body: "We take reasonable measures to keep your information safe. Access is limited to team members who need it to assist with your stay.",
        },
        {
          heading: "Contact",
          body: "For any questions about this policy or your data, please reach out to our reservations team through the contact page.",
        },
      ]}
    />
  );
}

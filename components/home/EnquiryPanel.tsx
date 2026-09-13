import { EnquiryForm } from "@/components/common/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";

export function EnquiryPanel() {
  return (
    <section className="relative z-30 -mt-24 lg:-mt-28">
      <div className="container-lux">
        <Reveal y={40}>
          <div className="rounded-2xl bg-card p-6 shadow-luxury sm:p-8 lg:p-10">
            <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow">Reserve your stay</span>
                <h2 className="mt-2 text-2xl text-foreground sm:text-3xl">
                  Begin Your Enquiry
                </h2>
              </div>
              <p className="max-w-sm text-sm text-foreground-muted">
                Tell us your dates and we&apos;ll take care of the rest.
              </p>
            </div>
            <EnquiryForm variant="panel" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

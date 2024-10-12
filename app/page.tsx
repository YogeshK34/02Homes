"use client";
import { title } from "@/components/primitives";
import CardComponent from "@/components/indoorplantscard";
import { Card, CardBody } from "@nextui-org/react";
import OutdoorCardComponent from "@/components/outdoorplantscard";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:py-10 relative">
      {/* Main text header section */}
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Your Journey to a&nbsp;</span>
        <span className={title({ color: "green" })}>Greener Home&nbsp;</span><br />
        <span className={title()}>
          Starts Here
        </span>
      </div>

      {/* Indoor Plants Section */}
      <div className="flex gap-8 pt-12">
        <Card>
          <CardBody>
            <p>Indoor Plants</p>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <CardComponent />
      </div>

      {/* Outdoor Plants Section */}
      <div className="flex gap-8 pt-2">
        <Card>
          <CardBody>
            <p>Outdoor Plants</p>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <OutdoorCardComponent />
      </div>
    </section>
  );
}

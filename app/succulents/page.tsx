"use client";
import { Card, CardBody } from "@nextui-org/react";
import Succulents from "@/components/succulents";
import { subtitle } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <div className="flex justify-center gap-8 pt-2">
        <Card>
          <CardBody>
            <p>Succulents</p>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Succulents />
      </div>
      <div className={subtitle({ class: "mt-4" })}>
      Succulents are a type of plant known for their thick, fleshy leaves or stems that are specially adapted to store water. This adaptation allows them to thrive in arid and dry environments where water is scarce. 
      Succulents come in a wide variety of shapes, sizes, and colors, and they are often prized for their unique appearance and low-maintenance care requirements
      </div><br></br>
    </div>
  );
}

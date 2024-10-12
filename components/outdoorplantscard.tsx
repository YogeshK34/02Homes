import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function OutdoorCardComponent() {
  return (
    <div className="flex items-center gap-8 grid grid-cols-4">
    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">12 Pieces</small>
        <h4 className="font-bold text-large pr-4">Lavendar</h4>
        <h4 className="font-normal text-default-900">$12.50</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://s.hdnux.com/photos/01/26/43/52/22690439/4/rawImage.jpg"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">12 Pieces</small>
        <h4 className="font-bold text-large pr-4">Rosemary</h4>
        <h4 className="font-normal text-default-900">$12.50</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://th.bing.com/th/id/R.2ce53e844414d42ec9341389e7dfb3b4?rik=KDtfg0pHR4Dh6g&riu=http%3a%2f%2fus.minigarden.net%2fwp-content%2fuploads%2f2016%2f02%2frosemary-2.jpg&ehk=Zx0DzjDPUn57cBFm%2bInneh1u7FeST1QF7Nzjs2Jw4h0%3d&risl=&pid=ImgRaw&r=0"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <small className="text-default-500">12 Pieces</small>
        
        <h4 className="font-bold text-large pr-4">Hibiscus</h4>
        <h4 className="font-normal text-default-900">$12.50</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://th.bing.com/th/id/R.a09a988efdb2e0759a6de04c118c7984?rik=DAPgnrO%2bRex%2f6Q&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f6%2f64%2fHibiscus_bleu_2.jpg&ehk=jB9MRtUtdC0%2f6whqGvNPYmgReTZifXW4uJbXnYsL2e0%3d&risl=&pid=ImgRaw&r=0"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <small className="text-default-500">12 Pieces</small>
        
        <h4 className="font-bold text-large pr-4">The Snake Plant</h4>
        <h4 className="font-normal text-default-900">$12.50</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://th.bing.com/th/id/OIP.3tU550BC0bF876gdSzg0DAHaE7?pid=ImgDet&w=474&h=315&rs=1"
          width={270}
        />
      </CardBody>
    </Card>
    </div>
  );
}
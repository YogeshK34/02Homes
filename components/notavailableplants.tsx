import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import AddtobagButton from "./addtobagbutton";
import BuyNowButton from "./buybutton";


export default function NotAvailPlantsComponent() {
  return (
    <div className="flex items-center gap-8 grid grid-cols-4">
    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large pr-4">Hoya Carnosa Compacta (Hindu Rope Plant)</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://media.greg.app/Y2FyZS1wbGFudC1wcm9maWxlL2hveWFfaGluZHVfcm9wZV8uanBn?format=pjpeg&optimize=high&auto=webp&precrop=1000:1000,smart&fit=crop&width=1000&height=1000"
          width={270}
        />
      </CardBody>
      <div className="flex justify-center gap-4 cursor-pointer">
      </div>
    </Card>

    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large pr-4">Philodendron Pink Princess</h4>
        
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://th.bing.com/th/id/OIP.T-qzoYxhLbEMiqFmukpHcQHaHa?pid=ImgDet&w=474&h=474&rs=1"
          width={270}
        />
      </CardBody>
      <div className="flex justify-center gap-4 cursor-pointer">
      </div>
    </Card>

    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <h4 className="font-bold text-large pr-4">Variegated Monstera Deliciosa</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://th.bing.com/th/id/OIP.BglI4YfhBIf6K3RkNrN_uAHaHa?w=750&h=750&rs=1&pid=ImgDetMain"
          width={270}
        />
      </CardBody>
      <div className="flex justify-center gap-4 cursor-pointer">
      
      </div>
    </Card>

    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <h4 className="font-bold text-large pr-4">Fiddle Leaf</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://th.bing.com/th/id/OIP.3tU550BC0bF876gdSzg0DAHaE7?pid=ImgDet&w=474&h=315&rs=1"
          width={270}
        />
      </CardBody>
      <div className="flex justify-center gap-4 cursor-pointer">
      </div>
    </Card>
    </div>
  );
}
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import BuyNowButton from "./buybutton";
import AddtobagButton from "./addtobagbutton";

export default function Succulents() {
  return (
    <div className="flex items-center gap-8 grid grid-cols-4">

    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">60 Pieces</small>
        <h4 className="font-bold text-large pr-4">Aloe Vera</h4>
        <h4 className="font-normal text-default-900">$2.99</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://thegardengranny.com/wp-content/uploads/2020/09/Aloe-vera-scaled.jpg"
          width={270}
        />
      </CardBody>
      <div className="flex justify-center gap-4 cursor-pointer">
      <BuyNowButton/>
      <AddtobagButton/>
      </div>
    </Card>

    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">08 Pieces</small>
        <h4 className="font-bold text-large pr-4">Echeveria</h4>
        <h4 className="font-normal text-default-900">$25.99</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://www.thespruce.com/thmb/Yvp7ZV7A2EYs_SE6_ivpWDisWq0=/2738x1825/filters:fill(auto,1)/high-angle-view-of-echeveria-succulent-plants-638725009-57c5b9605f9b5855e5cfcb9a.jpg"
          width={270}
        />
      </CardBody>
      <div className="flex justify-center gap-4 cursor-pointer">
      <BuyNowButton/>
      <AddtobagButton/>
      </div>
    </Card>

    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <small className="text-default-500">30 Pieces</small>
        
        <h4 className="font-bold text-large pr-4">Jade Plant</h4>
        <h4 className="font-normal text-default-900">$12.50</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://www.mydomaine.com/thmb/zacFl5ae3LUgcINRO-Lb0snnpec=/2121x0/filters:no_upscale():strip_icc()/GettyImages-1129857353-0c555e2889e54083a60fb4e1d7c17262.jpg"
          width={270}
        />
      </CardBody>
      <div className="flex justify-center gap-4 cursor-pointer">
      <BuyNowButton/>
      <AddtobagButton/>
      </div>
    </Card>

    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <small className="text-default-500">25 Pieces</small>
        
        <h4 className="font-bold text-large pr-4">Haworthia</h4>
        <h4 className="font-normal text-default-900">$12.50</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://unusualseeds.net/wp-content/uploads/2018/11/DSC_0098-faworthia-1.jpg"
          width={270}
        />
      </CardBody>
      <div className="flex justify-center gap-4 cursor-pointer">
      <BuyNowButton/>
      <AddtobagButton/>
      </div>
    </Card>
    </div>
  );
}
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import BuyNowButton from "./buybutton";
import AddtobagButton from "./addtobagbutton";

export default function IndooorCardComponent() {
  return (
    <div className="flex items-center gap-8 grid grid-cols-4">

    <Card className=" flex justify-center py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">25 Pieces</small>
        <h4 className="font-bold text-large pr-4">Monstera Deliciosa</h4>
        <h4 className="font-normal text-default-900">$14.99</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://www.thespruce.com/thmb/KRTn9OMgOzdVK5iKvFrKPh5gEYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-monstera-acacoyaguensis-care-guide-7480478-Hero-208c70728ea045b1b435870280920f2f.jpg"
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
        <small className="text-default-500">05 Pieces</small>
        <h4 className="font-bold text-large pr-4">Pothos </h4>
        <h4 className="font-normal text-default-900">$39.99</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://snoqualmieflowers.com/cdn/shop/files/DTE_pothos.jpg?v=1709099252g"
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
        
        <small className="text-default-500">50</small>
        
        <h4 className="font-bold text-large pr-4">Peace Lily</h4>
        <h4 className="font-normal text-default-900">$4.99</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://www.thespruce.com/thmb/O4mGS8FCKlxk9apOKqLazWBIC30=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-variegated-peace-lily-domino-7097188-hero-A-422d7faa152d42d3a4030ff8a2a33768.jpg"
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
        
        <small className="text-default-500">12 Pieces</small>
        
        <h4 className="font-bold text-large pr-4">The Snake Plant</h4>
        <h4 className="font-normal text-default-900">$12.50</h4>
      </CardHeader>
      <CardBody className="flex justify-center overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://www.marthastewart.com/thmb/mx7M8ShAKybHfND6_EskvXuPi0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plants-laurentii-0722-de4e19e634b4439e9b626d54f76db21a.jpg"
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
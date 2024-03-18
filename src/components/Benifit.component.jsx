import React from "react";
import ContainerComponent from "./Container.component";
import { PlaneTakeoff, Receipt, History } from "lucide-react";

const BenifitComponent = () => {
  return (
    <div className="bg-gray-200">
      <ContainerComponent>
        <div className="flex justify-between py-10 ">
          <div className="flex gap-6 items-center justify-center">
            <PlaneTakeoff size={48} strokeWidth={2} absoluteStrokeWidth />
            <div>
              <p className="lg:text-xl text-base font-bold uppercase">
                Free Shipping
              </p>
              <p className="lg:text-xl text-sm">Over 100$</p>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center">
            <Receipt size={48} strokeWidth={2} absoluteStrokeWidth />
            <div>
              <p className="lg:text-xl text-base font-bold uppercase">
                Best Price
              </p>
              <p className="lg:text-xl text-sm">Guaranteed price</p>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center">
            <History size={48} strokeWidth={2} absoluteStrokeWidth />
            <div>
              <p className="lg:text-xl text-base font-bold uppercase">
                Free Return
              </p>
              <p className="lg:text-xl text-sm">Within 15 days</p>
            </div>
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};

export default BenifitComponent;

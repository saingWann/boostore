import React from "react";
import ContainerComponent from "./Container.component";
import { PlaneTakeoff, Receipt, History } from "lucide-react";

const BenifitComponent = () => {
  return (
    <div className="lg:bg-gray-100">
      <ContainerComponent>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-5 lg:gap-0 md:gap-0 lg:py-10 py-3 md:px-10 ">
          <div className="flex gap-6 items-center justify-center bg-gray-100 py-3 lg:py-0">
            <PlaneTakeoff size={48} strokeWidth={2} absoluteStrokeWidth />
            <div>
              <p className="lg:text-xl text-base font-bold uppercase">
                Free Shipping
              </p>
              <p className="lg:text-xl text-sm">Over 100$</p>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center bg-gray-100 py-3 lg:py-0">
            <Receipt size={48} strokeWidth={2} absoluteStrokeWidth />
            <div>
              <p className="lg:text-xl text-base font-bold uppercase">
                Best Price
              </p>
              <p className="lg:text-xl text-sm">Guaranteed price</p>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center bg-gray-100 py-3 lg:py-0">
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

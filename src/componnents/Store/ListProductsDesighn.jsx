import React from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

function ListProductsDesighn() {
  return (
    <div>
      <div className=" flex flex-col gap-3 bg-[#F9F9F9] p-2 md:p-5 rounded-[10px] ">
        <h2 className="text-[20px] font-[600]">List Products</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <Label className="text-[15px] font-[500] text-[#474B4F]">
              Title
            </Label>
            <Input
              type="text"
              placeholder="Title"
              className=" border h-10 text-[15px] bg-[#EEEEEE] rounded-[5px] outline-none pl-[16px] "
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-[15px] font-[500] text-[#474B4F]">
              SubTitle
            </Label>
            <Input
              type="text"
              placeholder="SubTitle"
              className=" border h-10 text-[15px] bg-[#EEEEEE] rounded-[5px] outline-none pl-[16px] "
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ListProductsDesighn;

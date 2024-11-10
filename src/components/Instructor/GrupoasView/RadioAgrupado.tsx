import { Radio, RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction } from 'react';

import { TipoCurso } from '@/types/index';
type RadioGroupProps = {
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
    plans:TipoCurso[];
}
export default function RadioAgrupado({selected,setSelected,plans}:RadioGroupProps) {


  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup  value={selected}  onChange={setSelected} aria-label="Server size" className="space-y-2">
          {plans.map((plan) => (
            <Radio
              key={plan.name}
              value={plan}
              className="group relative flex cursor-pointer duration-150 ease-in-out hover:scale-110 rounded-lg bg-white/5 py-4 px-5 shadow-md transition focus:outline-none data-[focus]:outline-1 "
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="text-xl font-semibold text-slate-700">{plan.name}</p>
                  
                </div>
                <CheckCircleIcon className="size-6 opacity-0 fill-indigo-700 transition group-data-[checked]:opacity-100" />
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
import type { FC } from "react";

interface Props {
    type: 'search' | 'add';
    placeholder: string;
}

export const Input: FC<Props> = ({ type, placeholder }) => {
  return (
    <div>
        <input 
            type="text"  
            placeholder={placeholder} />
    </div>
  )
}

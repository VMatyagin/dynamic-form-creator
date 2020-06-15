import React from "react";
import { LeftContainer } from "../../../ui/templates";
import {
  FormsListHeader,
  FormsListContainer,
  FormCategory,
  FormCategoryItem,
} from "../molecules";
import { dataType } from "../pages/home";

export const FormsList = ({ data }: FormsListProps) => {    
  return (
    <LeftContainer>
      <FormsListHeader />
      <FormsListContainer>
        {data.map((item) => (
          <FormCategory label={item.label} key={item.label}>
            {item.forms.map( (subItem ) => (
                <FormCategoryItem {...subItem} key={subItem.label}/>
            ))}
          </FormCategory>
        ))}
      </FormsListContainer>
    </LeftContainer>
  );
};

interface FormsListProps {
  data: dataType;
}

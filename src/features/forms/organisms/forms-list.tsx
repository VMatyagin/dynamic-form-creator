import React from "react";
import {
  FormsListHeader,
  FormsListContainer,
  FormCategory,
  FormCategoryItem,
} from "../molecules";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_FORMS } from "../queries";
import { OrganisationsData } from "../types";
import { Spinner } from "../../../ui/atoms";

export const FormsList = ( ) => {    
  const { data, loading, refetch } = useQuery<OrganisationsData>(GET_ALL_FORMS);

  if (!data || loading) {
    return <Spinner/>
  }

  return (
    <>
      <FormsListHeader refetch={refetch} />
      <FormsListContainer>
        {data.organisations.map( (item) => (
          <FormCategory label={item.name} key={item.name}>
            {item.forms.map( (subItem ) => (
                <FormCategoryItem {...subItem} key={subItem.label} />
            ))}
          </FormCategory>
        ))}
      </FormsListContainer>
    </>
  );
};
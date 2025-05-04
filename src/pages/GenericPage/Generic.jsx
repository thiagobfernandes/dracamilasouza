import React from "react";

import { Navbar } from "../../components";
import bannerImg from "../Tratamento/imageBanner.jpg";
import { treatments } from "../../mock/tratamentos/tratamentos";
import { useParams } from "react-router-dom";
import { GenericPageItemId } from "../../components/GenericPageItemId/GenericPage";
import { useLanguage } from "../../context/languageContext"; 



export const GenericItemPage = () => {

  const { id } = useParams();
  const { language } = useLanguage(); 
  const tratamentosarray = treatments(language)
  const tratamentos = tratamentosarray.find(
    (treatment) => treatment.id === Number(id)
  );

  return (
    <>
      <Navbar />
      <GenericPageItemId treatment={tratamentos} />
    </>
  );
};

export default GenericItemPage;

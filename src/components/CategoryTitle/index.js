import React from 'react';

import { H1, H2 } from 'Components/HTML';

export const title = {
  patients: 'Retrouvez les informations qui vous concernent',
  praticiens: 'Découvrez tous les sites d’utilités essentielles',
  etablissements: 'Parcourez les outils et les ressources à disposition'
};
export const subtitle = {
  patients: 'Pour tous les patients',
  praticiens: 'Pour tous les soignants, praticiens',
  etablissements: 'Pour tous les établissements de santé'
};

const Subtitle = H2.withComponent('small');

const CategoryTitle = ({ target }) => {
  return (
    <>
      <H1>
        {title[target]}
        <Subtitle>{subtitle[target]}</Subtitle>
      </H1>
    </>
  );
}

export default CategoryTitle;

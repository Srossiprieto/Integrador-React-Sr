import {templates} from '../../data/templates'

import { 
    TemplateContainer,
    ContainerTemplateWrapper,
    TemplateWrapper
 } from "./TemplateStyledCard"

import Templates from "./Templates"




function TemplatesCard() {
  return (
    <>
      <TemplateContainer>
          <h1>Templates</h1>
          <ContainerTemplateWrapper>
              <TemplateWrapper>
                {templates.map(prod =>(

                <Templates key={prod.id} {...prod} />

                ))}
              </TemplateWrapper>
          </ContainerTemplateWrapper>
      </TemplateContainer>
     </>
  )
}

export default TemplatesCard

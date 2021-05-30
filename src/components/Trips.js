import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Trips = () => {

  const data = useStaticQuery(graphql`

    query TripsQuery {
        allTripsJson {
          edges {
            node {
              alt
              button
              name
              img {
                childImageSharp {
                  fluid (maxWidth: 600){
                    ...GatsbyImageSharpFluid
                    
                  }
                }
              }
            }
          }
        }
      }
    `)

  function getTrips(data) {

    const tripsArray = []

    // console.log("data.allTripsJson.edges", data.allTripsJson.edges);

    data.allTripsJson.edges.forEach((item, index) => {

      tripsArray.push(

        <div key={index}>
          <Img src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}

          />
        </div>
      )
    })

    return tripsArray
  }

  return (

    <ProductsContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>

    </ProductsContainer>
  )
}

export default Trips

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: #fff;
    color: #fff

`
const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const ProductWrapper = styled.div``

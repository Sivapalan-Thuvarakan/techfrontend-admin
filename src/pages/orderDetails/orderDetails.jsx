import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";



const Container=styled.div`
    flex:4;
    padding:20px;
`
const Wrapper=styled.div`
    padding:20px;
    
`
const Title=styled.h1`
    font-weight:300;
    text-align:center;

`



const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
`
const Info=styled.div`
    flex:3;
`
const Product=styled.div`
 display:flex;
 justify-content:space-between;
`
const ProductDetails=styled.div`
    flex:2;
    display:flex;
`
const Image=styled.img`
    width:200px;
`
const Details=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;

`

const ProductName=styled.span`

`
const ProductId=styled.span`

`



const PriceDetails=styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
`
const ProductAmountContainer=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`
const ProductAmount=styled.div`
    font-size:24px;
    margin:5px;
    
`
const ProductPrice=styled.div`
    font-weight:200;
    font-size:30px;
`


const Hr=styled.hr`
    border:none;
    background-color:#eee;
    height:2px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;



const Cart=()=>{
    return(
        <Container>
            
            <Wrapper>
                <Title>Order Details</Title>
                
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                <Details>
                                    <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>Id:</b>93678421</ProductId>
                                    
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>3</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Image src="https://www.mdtextile.com/images/stories/virtuemart/product/foursquare-160gsm-roundneck-greymelange-tshirt.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b>JESSIE T-SHIRT</ProductName>
                                    <ProductId><b>Id:</b>93678421</ProductId>
                                    
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Address</SummaryItemText>
                            <SummaryItemPrice>Jaffna</SummaryItemPrice>
                        </SummaryItem>
                        
                    </Summary>
                </Bottom>

            </Wrapper>

        <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Sales Agent</label>
                  <select name="salesagent" id="idAgent">
                      <option value="Not Selected">Select</option>
                      <option value="Kanthan">Kanthan</option>
                      <option value="Ramesh">Ramesh</option>
                  </select>
                  <label>Satatus</label>
                  <select name="active" id="active">
                      <option value="accept">Accept</option>
                      <option value="pending">Pending</option>
                  </select>
                  <button className="productButton">Update</button>
              </div>
            </form>
        </div>
            

        </Container>
    )
}

export default Cart;
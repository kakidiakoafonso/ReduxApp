import styled from "styled-components/native";

export const Container = styled.View`
flex:1;
background-color:#f2f2f2;
`
export const TopContainer = styled.View`
flex:0.2;
justify-content:space-evenly;
align-items:flex-end;
flex-direction:row ;
margin-bottom:3%;
`
export const Input = styled.TextInput`
width: 70%;
height: 50px;
background-color:#fff ;
border-radius:3px;
padding-left: 10px;
`
export const AddButton = styled.TouchableOpacity`
width: 50px;
height: 50px;
background-color: #1a75ff;
border-radius:3px ;
justify-content:center ;
align-items:center ;

`
export const ItensContainer = styled.View`
flex:0.85;
`
export const FlatList = styled.FlatList`
/* background-color:red ; */
`

export const Item = styled.TouchableOpacity`
width:90%;
height:100px;
background-color:#b3b3b3;
align-self:center ;
margin:4px 0px 10px 0px;
border-radius:4px ;
`
export const ItemTop = styled.View`
width:100%;
height:40%;
padding:5px 2% ;
flex-direction:row ;
justify-content:space-between;
`
export const ItemBottom = styled.View`
width:100%;
height:60%;
/* align-items:center ; */
justify-content:center ;
`
export const DateContainer = styled.View`
width:100px;
flex-direction:row ;
justify-content:space-between;
align-items:center;
`

export const RemoveButton=styled.TouchableOpacity`
`
export const DateText = styled.Text`
color:#1a75ff;
`
export const TaskText = styled.Text`
/* color:#1a75ff; */
color:#000;
opacity:0.6;
font-size:15px ;
font-weight:bold;
margin-left:2%;
`
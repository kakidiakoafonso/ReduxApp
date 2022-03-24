import * as S from './styled'
import React, { useRef } from 'react'
import {Animated} from 'react-native'
import { Ionicons,FontAwesome,MaterialIcons,AntDesign} from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { Check, Remove } from '../../redux/Action';

type Props = {
    item:{
        date:string,
        id:string,
        tarefa:string,
        cheked:boolean
    }
}
export default function Card({item}:Props) 
{
    
    const Item = Animated.createAnimatedComponent(S.Item)
    const translateAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const dispatch = useDispatch()

    function handleRemove() 
    {
        Animated.timing(translateAnim, {
            toValue: -220,
            duration: 500,
            useNativeDriver:true
            }).start(()=>
            {
                Animated.timing(fadeAnim, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver:true
                        }).start(()=>dispatch(Remove(item.id)));
            });
    }
    function handlCheck() 
    {
        dispatch(Check(item.id))
    }
  return (
    <Item style={{
        opacity:fadeAnim,
        transform:[
            {translateX:translateAnim}
        ]
    }}>
        <S.ItemTop>
            <S.DateContainer>
                <FontAwesome name="calendar" size={20} color="#fff" />               
                <S.DateText>{item.date}</S.DateText>
            </S.DateContainer>
            <S.CheckButton onPress={handlCheck}>
                {
                    item.cheked?                 
                    <AntDesign name="checkcircleo" size={24} color="#fff" />
                    :
                    <MaterialIcons name="radio-button-unchecked" size={20} color="#fff" />
                }
            </S.CheckButton>
        </S.ItemTop>

        <S.ItemBottom>
            <S.TaskText>
                {item.tarefa}
            </S.TaskText>
        
        </S.ItemBottom>
        {
            item.cheked && 
            <S.RemoveButton onPress={handleRemove}>
                <Ionicons name="trash" size={24} color="red" />
            </S.RemoveButton>
        }
    </Item>
  )
}
import * as S from './styled'
import { AntDesign } from '@expo/vector-icons';
import React,{useCallback, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-native-uuid'
import { Add ,Remove} from '../redux/Action';
import Card from '../Component/Card/Card';

export default function Home() 
{
    const todos = useSelector(state=> state.todos)
    const dispatch = useDispatch()
    
    const inputRef = useRef();
    const setError = useCallback((color:string,border:number) => {    
        inputRef.current.setNativeProps({
        borderBottomColor: color,
        borderBottomWidth:border
    });
    }, []);

    const [task, settask] = useState<string>("")
    function handleAdicionar() 
    {
        if(task==="")
        {
           setError("red",2)           
        }
        else
        {
            const dia = new Date().getDate()
            const mes = new Date().getMonth()
            const ano = new Date().getFullYear()
            settask("")
            dispatch(Add({
                id:uuid.v4(),
                tarefa:task,
                cheked:false,
                date: `${dia}/${mes}/${ano}`
            }))
            setError("#fff",0)
        }
    }
    
  return (
    <S.Container>
        <S.TopContainer>
            <S.Input ref={inputRef} placeholder='Adicionar nova tarefa' 
            onChangeText={settask} value={task} style={{}}
            />
            <S.AddButton activeOpacity={0.6} onPress={handleAdicionar}>
                <AntDesign name="plus" size={24} color="#fff" />
            </S.AddButton>
        </S.TopContainer>

        <S.ItensContainer>
            <S.FlatList
                data={todos}
                keyExtractor={(item:any)=>String(item.id)}
                renderItem={({item})=> <Card item={item}/>}
            />
        </S.ItensContainer>
    </S.Container>
  )
}
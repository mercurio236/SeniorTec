import React from 'react';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

const Bot = () => {
    //configura o tamanho do bot
    const config = {
        width: '300px',
        height: '400px',
        floating: true
    }

    const theme ={
        botBubbleColor:'#000',
        botFontColor:'#fff',
        headerBgColor:'#000',
        headerFontColor:'#fff',
        background:'#fff'
    }

    const steps = [
        {
            id: "Bem Vindo",
            message: "Olá, bem vindo a SeniorTec",
            trigger: "Ajuda"
        },
        {
            id: 'Ajuda',
            message: 'Em que podemos ajudar?',
            trigger: 'Contato'
        },
        {
            id: 'Contato',
            options: [
                {
                    value: 'Celular',
                    label: 'Celular',
                    trigger: 'celular'
                },
                {
                    value: 'Email',
                    label: 'E-mail',
                    trigger: 'email'
                }
            ]
        },
        {
            id: 'celular',
            message: '61984495952',
            trigger: 'Done'

        },
        {
            id: 'email',
            message: 'seniortec@seniortec.com',
            trigger: 'nome'
        },
        {
            id:'nome',
            user: true,
            trigger:'ola'
        },
        {
            id:'ola',
            message:"Ola {previousValue}",
            trigger:'Done'
        },
        {
            id: "Done",
            message: "Obrigado, tenha um otimo dia !!",
            end: true
        }
    ];
    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} {...config} headerTitle="SeniorTec"/>
        </ThemeProvider>
    )
}

export default Bot;
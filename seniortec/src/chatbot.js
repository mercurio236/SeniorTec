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

    const theme = {
        botBubbleColor: '#000',
        botFontColor: '#fff',
        headerBgColor: '#000',
        headerFontColor: '#fff',
        background: '#fff'
    }

    const steps = [
        {
            id: "Bem Vindo",
            message: "Olá, bem vindo eu sou o assistente " +
                "da SeniorTec qual seu nome?",
            trigger: "identificacao"
        },
        {
            id: 'identificacao',
            user: true,
            trigger: 'resposta'
        },
        {
            id: 'resposta',
            message: 'Olá {previousValue}, em que posso ajudar? ' +
                'caso queira contratar nossos serviços pode entrar em contato.',
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
                },
                {
                    value: 'Outra Coisa',
                    label: 'Outra Coisa',
                    trigger: 'outra'
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
            message: 'seniortec@hotmail.com',
            trigger: 'Done'
        },

        {
            id: 'outra',
            message: 'Vou me esforçar para ajudar' +
                'basta selecionar uma das opções',
            trigger: 'outra opcao'
        },
        {
            id: 'outra opcao',
            options: [
                {
                    value: 'sobre',
                    label: 'Sobre',
                    trigger: 'sobre'
                },
                {
                    value: 'equipe',
                    label: 'Equipe',
                    trigger: 'equipe'
                },
                {
                    value: 'contratar',
                    label: 'Contratar nossa equipe',
                    trigger: 'Contato'
                }
            ]
        },
        {
            id: 'sobre',
            message: "Então {previousValue}, nossa equipe e formada por profissionais de ponta " +
                "sempre disposto a fazer o melhor para entregar tudo com qualidade",
            trigger:'contratar'
        },
        {
            id:'contratar',
            options: [
                {
                    value: 'Contratar Equipe',
                    label: 'Contratar equipe',
                    trigger: 'Contato'
                }
            ]
        },
        {
            id:'equipe',
            message:'Nossa equipe é formada pelos melhores profssinais do mercado'+
            ' veja sobre a gente na aba sobre',
            trigger:'Contato'
        },
        
        {
            id: "Done",
            message: "Obrigado, estamos aguardando seu contato!! Até logo",
            end: true
        }
    ];
    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} {...config} headerTitle="SeniorTec" />
        </ThemeProvider>
    )
}

export default Bot;
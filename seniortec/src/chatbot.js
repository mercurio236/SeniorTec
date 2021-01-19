import React from 'react';
import ChatBot from "react-simple-chatbot";

const Bot = () => {
    //configura o tamanho do bot
    const config ={
        width:'300px',
        height:'400px',
        floating: true
    }

    const steps = [
        {
         id: "Bem Vindo",
         message: "Olá, bem vindo a SeniorTec",
         trigger: "Ajuda"
        },
        {
            id:'Ajuda',
            message:'Em que podemos ajudar?',
            trigger:'Contato'
        },
        {
            id:'Contato',
            options:[
                {
                    value:'Celular',
                    label:'Celular',
                    trigger:'celular'
                },
                {
                    value:'Email',
                    label:'E-mail',
                    trigger: 'email'
                }
            ]
        },
        {
            id:'celular',
            message:'61984495952',
            trigger:'Done'

        },
        {
            id:'email',
            message:'seniortec@seniortec.com',
            trigger:'Done'
        },
        {
         id: "Done",
         message: "Obrigado, tenha um otimo dia !!",
         end: true
        }
      ];
    return  <ChatBot steps={steps} {...config}/>  
}

export default Bot;
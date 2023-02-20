var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:3000,
    loading: true,
    content: 'Hello. This is Alex, and I am a well-being chatbot from DailyNote. I will be assisting you with your jounraling.'
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        content:'Throughout our conversation, I will ask you some open-ended questions. You can respond to them as you want.'
    });
}).then(function(){
    return botui.message.add({
        delay:5000,
        loading: true,
        content:'Because I want you to have a journaling experience, I will not respond to your thoughts, but just ask you questions and keep the flow going.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Everything you share will be strictly confidential between us.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Now let`s start! How was your day?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'What kind of emotion did you feel today?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Fear',
            value: 'Fear' 
          },
          { text: 'Anger',
            value: 'Anger' 
          },
          { text: 'Joy',
            value: 'Joy'
          },
          { text: 'Sadness',
            value: 'Sadness' 
          },
          { text: 'Disgust',
            value: 'Disgust' 
          },
          { text: 'Surprise',
            value: 'Surprise' 
          }
        ]
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then (if (response[1]="Joy") {
        function(){
            return botui.message.add({
            delay:2000,
            loading: true,
            content:'I am glad you felt that way. What made you feel that?'
            });
       }} else {
         function(){
            return botui.message.add({
            delay:2000,
            loading: true,
            content:'I am sorry you felt that way. What made you feel that?'
            });
}}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Can you share with me one positive thing that happened to you today?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
        });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Can you share with me one thing that has been bothering you today?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
        });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3500,
        loading: true,
        content:'I applaud you for taking the first step in sharing your feelings with me. I appreciate your faith in me.'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'No problem at all',
            value: 'No problem at all' 
          },
          { text: 'Thank you as well',
            value: 'Thank you as well' 
          },
          { text: 'Glad to hear that',
            value: 'Glad to hear that'
          }
        ]
    });
}).then(function (res) { 
        console.log(res.value); 
        response.push(res.value);   
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'Thank you and have a great rest of your day. Bye!'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2], "text4":response[3], "text5":response[4], "text6":response[5]}, "*");
};

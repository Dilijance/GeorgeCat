function getBotResponse(x) {
    // greetings
    if (x == 'hello') {
        return "Hello, how can i help you?";
    }
    if (x == 'hi') {
        return "Hello, how can i help you?";
    }
    if (x == 'Hello') {
        return "Hello, how can i help you?";
    }
    if (x == 'Hey') {
        return "Hello, how can i help you?";
    }
    if (x == 'Hi') {
        return "Hello, how can i help you?";
    }
    if (x == 'helo') {
        return "Hello, how can i help you?";
    }
    if (x == 'HELLO') {
        return "Hello, how can i help you?";
    }
    // Goodbye
    if (x == 'bye') {
        return "Goodbye!";
    }
    if (x == 'goodbye') {
        return "Have a nice trip!";
    }
    if (x == 'Bye') {
        return "Have a nice trip!";
    }
    if (x == 'Goodbye') {
        return "Have a nice trip!";
    }
    if (x == 'GOODBye') {
        return "Have a nice trip!";
    }
    // Thanks
    if (x == 'thanks') {
        return "I am glad i could help you!";
    }
    if (x == 'thx') {
        return "I am glad i could help you!";
    }
    if (x == 'thank you') {
        return "I am glad i could help you!";
    }
    if (x == 'Thank You') {
        return "I am glad i could help you!";
    }
    if (x == 'Thanks') {
        return "I am glad i could help you!";
    }
    // Ok
    if (x == 'ok') {
        return "I'll be there If you have any other question!";
    }
    if (x == 'OK') {
        return "I'll be there If you have any other question!";
    }
    if (x == 'okay') {
        return "I'll be there If you have any other question!";
    }
    if (x == 'pk') {
        return "I'll be there If you have any other question!";
    }
    if (x == 'Ok') {
        return "I'll be there If you have any other question!";
    }
    else {
        const dataToSend = {
            sentence: x
        };
        
        return fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data.message
        })
    }

}
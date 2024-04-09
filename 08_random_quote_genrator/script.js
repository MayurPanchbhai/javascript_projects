function genCode(){
    const obj ={
        "~ Steve Jobs" :'"The only way to do great work is to love what you do."',
        "~ Theodore Roosevelt":'"Believe you can and youre halfway there."',
        "~ Winston Churchill":'"Success is not final, failure is not fatal: It is the courage to continue that counts."',
        "~ Eleanor Roosevelt":'"The future belongs to those who believe in the beauty of their dreams."',
        "~ Franklin D. Roosevelt":'"The only limit to our realization of tomorrow will be our doubts of today."',
        "~ David Goggins":'"You have to build calluses on your brain just like how you build calluses on your hands. Callus your mind through pain and suffering."',
        "~ Elon Musk":'"When something is important enough, you do it even if the odds are not in your favor."',
        "~ Andrew Tate":'"What color is your Bugatti?"'
    }

    let authorName =Object.keys(obj)

    let author = authorName[Math.floor(Math.random() * authorName.length)]
    let quote =obj[author];
    
    let displayQuotes = document.getElementById("quote")      //getElementsById("quote");
    let displayAuthor = document.getElementById("quoteMaster");

    displayQuotes.innerHTML=quote;
    displayAuthor.innerHTML=author;


}

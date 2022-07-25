type Tweetprops = {
    text: string;
}

export function Tweet(props: Tweetprops){
    return (
        <p>{props.text}</p>
    );
}
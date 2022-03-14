export default function Stories(){
    const infos = [
        {src:"instagram/assets/img/9gag.svg", name:"9gag"},
        {src:"instagram/assets/img/meowed.svg", name:"meowed"},
        {src:"instagram/assets/img/barked.svg", name:"barked"},
        {src:"instagram/assets/img/nathanwpylestrangeplanet.svg", name:"nathanwpylestrangeplanet"},
        {src:"instagram/assets/img/wawawicomics.svg", name:"wawawicomics"},
        {src:"instagram/assets/img/respondeai.svg", name:"respondeai"},
        {src:"instagram/assets/img/filomoderna.svg", name:"filomoderna"},
        {src:"instagram/assets/img/memeriagourmet.svg", name:"memeriagourmet"}
    ]

    return(
        <div class="stories">
            {infos.map(info => <Story src={info.src} name={info.name}/>)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props){
    return(
        <div class="story">
            <div class="imagem">
                <img src={props.src} alt={props.name}/>
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}
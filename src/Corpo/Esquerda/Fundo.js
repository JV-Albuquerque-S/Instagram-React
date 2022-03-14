export default function Fundo(props){
    return(
                <div class="fundo">
                    <Acoes />
                    <div class="curtidas">
                        <img src={props.likeImg} />
                        <div class="texto">
                            Curtido por <strong>{props.likeName}</strong> e <strong>{props.likeText}</strong>
                        </div>
                    </div>
                </div>
    )
}

function Acoes(){
    return(
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}
export default function Icones(){
    return(
        <div class="icones">
            <Ion name="paper-plane-outline" />
            <Ion name="compass-outline" />
            <Ion name="heart-outline" />
            <Ion name="person-outline" />
        </div>
    )
}

function Ion(props){
    return(
        <ion-icon name={props.name}></ion-icon>
    )
}
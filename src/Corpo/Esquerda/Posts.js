import Fundo from "./Fundo"
import Topo from "./Topo"

export default function Posts(){
    const infos = [
        {ProfileImg:"instagram/assets/img/meowed.svg", name:"meowed", img:"instagram/assets/img/gato-telefone.svg", likeImg:"instagram/assets/img/respondeai.svg", likeName:"respondeai", likeText:"outras 101.523 pessoas"},
        {ProfileImg:"instagram/assets/img/barked.svg", name:"barked", img:"instagram/assets/img/dog.svg", likeImg:"instagram/assets/img/adorable_animals.svg", likeName:"adorable_animals", likeText:"outras 99.159 pessoas"}
    ]
    return(
        <div class="posts">
            {infos.map(info=> <Post ProfileImg={info.ProfileImg} name={info.nome} img={info.img} likeImg={info.likeImg} likeName={info.likeName} likeText={info.likeText}/>)}
        </div>  
    )
}

function Post(props){
    return(
            <div class="post">
                <Topo ProfileImg={props.ProfileImg} name={props.name}/>
                <div class="conteudo">
                    <img src={props.img} />
                </div>
                <Fundo likeImg={props.likeImg} likeName={props.likeName} likeText={props.likeText} />
            </div>
    )
}